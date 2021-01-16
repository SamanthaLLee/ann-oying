// Functions for each inconvenience 
var rickRoll = function() {
	console.log("rickRoll");
}

var deleteWindow = function() {
	console.log("deleteWindow");
	//chrome.windows.remove(WINDOW_ID_CURRENT, function(){})
}

// Maintaining a list of all functions in the background script
var allBackgroundActions = [
	rickRoll,
	deleteWindow
]

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  sendResponse({status: "Message received"});
	
	// Pick out a random background action
	var rand = Math.floor(Math.random() * allBackgroundActions.length);
	allBackgroundActions[rand]();
	
});

// Listeners
// On installation, this function will execute
// chrome.runtime.onInstalled.addListener(function() {
// 	var interval = window.setInterval(callback, 1000);
// });


