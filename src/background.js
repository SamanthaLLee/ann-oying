// Functions for each inconvenience 
var rickRoll = function() {
	console.log("rickRoll");
}

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

// Maintaining a list of all functions in the background script
var allBackgroundActions = [
	rickRoll,
	deleteWindow,
	muteTab
]

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  sendResponse({status: "Message received"});
	console.log("Message received");
	// Pick out a random background action
	var rand = Math.floor(Math.random() * allBackgroundActions.length);
	//allBackgroundActions[rand]();
	allBackgroundActions[2]();

});


