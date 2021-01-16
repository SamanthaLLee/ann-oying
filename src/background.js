var allOptions = [];
var numActions = 0;

// Functions for each inconvenience 
var rickRoll = function() {
	console.log("rickRoll");
}

var setZoom= function() {
	chrome.tabs.setZoom(1.25, function(){})
}

setZoom()

var deleteWindow = function() {
	console.log("deleteWindow");
	//chrome.windows.remove(WINDOW_ID_CURRENT, function(){})
}


var muteTab = function() {
	console.log("muteTab");
	chrome.tabs.query({audible: true}, function(tabs){
		for(var i = 0; i < tabs.length; i++) {
			var audible = tabs[i].audible;
			if (audible) {
				chrome.tabs.update(tabs[i].tabId, {muted: true});
			}
		}
	});
}

var changeFontSize = function() {
	console.log("changeFontSize");
	//chrome.fontSettings.setDefaultFontSize({pixelSize: 120}, function(){});
}

var changeFontStyle = function() {
	console.log("changeFontStyle");
	chrome.fontSettings.setFont( { genericFamily: 'cursive', script: 'Nkgb', fontId: 'MS PGothic' } );
}

// Maintaining a list of all functions in the background script
var allBackgroundActions = [
	rickRoll,
	setZoom,
	deleteWindow,
	muteTab,
	changeFontSize,
	changeFontStyle
]

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
		
		sendResponse({status: "Message received"});
		
		chrome.storage.sync.get('allOptions', function(result){
			allOptions = result.allOptions;
			console.log("got allOptions");
		});
		chrome.storage.sync.get('numActions', function(result){
			numActions = result.numActions;
			console.log("got numActions");
		});
		
		if(request.msg === "BG"){
			console.log("Message received");
			// Pick out a random background action
			var rand = Math.floor(Math.random() * allBackgroundActions.length);
			allBackgroundActions[rand](); //allBackgroundActions[4](); //for manual testing
			chrome.notifications.create('', allOptions[(numActions - allBackgroundActions.length) + rand], function() { console.log("Last error:", chrome.runtime.lastError); });
		}else{
			var num = request.num;
			chrome.notifications.create('', allOptions[num], function() { console.log("Last error:", chrome.runtime.lastError); });
		}
});

