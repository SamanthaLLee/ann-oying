// Functions for each inconvenience 
var rickRoll = function() {
	
}

var deleteWindow = function() {
	chrome.windows.remove(WINDOW_ID_CURRENT, function(){})
}

var muteTab = function() {
	chrome.tabs.query({active: true, audible: true}, function(tabs){ 
		for(var i = 0; i < tabs.length; i++) {
			var muted = tabs[i].mutedInfo;
			if (!muted) chrome.tabs.update(tabs[i], {muted: true});
		}
	});
}

// Listeners

// On installation, this function will execute
chrome.runtime.onInstalled.addListener(function() {
		// Set up timer
		// Every x seconds, do one of the actions
		// We can also send a message to the content script from here to execute the functions in that file
});
