
chrome.runtime.onInstalled.addListener(function() {

    chrome.contextMenus.create({
        "id": "stockPoolMenu",
        "title": "添加股票 %s",
        "contexts": ["selection"]
    });
});

chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({ url: "stock-pool.html" });
});

chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId === 'stockPoolMenu') {	
		var value = `${info.selectionText}`;
		var stocks = JSON.parse(localStorage.getItem('stocks')) || [];
		console.log(stocks);
		
		if(stocks.length > 0) {
			for(var i = 0; i <stocks.length; i++) {
				if(value === stocks[i].stock) {
				   return false
				}
			}
		}
		
		
	   var stock = {
			 "stock": value
		  } 		
		stocks.push(stock);
		console.log(stocks);
		localStorage.setItem("stocks", JSON.stringify(stocks));
		console.log(localStorage.getItem('stocks'));
	
		
    }
})







