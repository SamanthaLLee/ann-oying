// Functions for each inconvenience 
var rickRoll = function() {
	
}

var deleteWindow = function() {
	chrome.windows.remove(WINDOW_ID_CURRENT, function(){})
}

// Listeners

// On installation, this function will execute
chrome.runtime.onInstalled.addListener(function() {
		// Set up timer
		// Every x seconds, do one of the actions
		// We can also send a message to the content script from here to execute the functions in that file
});