// Functions for each inconvenience 
var rickRoll = function() {
	console.log("rickRoll");
}

var deleteWindow = function() {
	console.log("deleteWindow");
	//chrome.windows.remove(WINDOW_ID_CURRENT, function(){})
}

var muteTab = function() {
	chrome.tabs.query({active: true, audible: true}, function(tabs){ 
		for(var i = 0; i < tabs.length; i++) {
			var muted = tabs[i].mutedInfo;
			if (!muted) chrome.tabs.update(tabs[i], {muted: true});
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
	
	// Pick out a random background action
	var rand = Math.floor(Math.random() * allBackgroundActions.length);
	allBackgroundActions[rand]();
	
});


