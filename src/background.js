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
	//chrome.fontSettings.setDefaultFontSize({pixelSize: 120}, function(){});
	console.log("changeFontSize");
}

var changeFontStyle = function() {
	chrome.fontSettings.setFont( { genericFamily: 'cursive', script: 'Nkgb', fontId: 'MS PGothic' } );
	console.log("changeFontStyle");
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
	console.log("Message received");
	// Pick out a random background action
	var rand = Math.floor(Math.random() * allBackgroundActions.length);
	allBackgroundActions[rand]();
	//allBackgroundActions[4](); //for manual testing
});


