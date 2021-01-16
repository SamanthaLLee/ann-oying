// Functions for each inconvenience 
var rickRoll = function() {
	chrome.tabs.create("https://www.youtube.com/watch?v=DLzxrzFCyOs")
	console.log("rickRoll success");
}

var duplicate = function(){
	chrome.tabs.query({active: true}, function(tabs){ 
		var max = tabs.length - 1;
		var rng = Math.random() * (max - 1) + 1;
		chrome.tabs.duplicate(rng);
	})
	console.log("duplicate success");
}

var openTopSites = function(){
	chrome.topSites.get(sitesToOpen, function(){
		var max = sitesToOpen.length - 1;
		var rng = Math.random() * (max - 1) + 1;
		chrome.tabs.create(sitesToOpen[rng].url);
	})
	console.log("openTopSites success");
}

var annePopsUp = function (){
	chrome.action.setPopUp("Testing 1, 2, 3 :)", function(){})
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
	changeFontStyle,
	duplicate,
	openTopSites
]

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  sendResponse({status: "Message received"});
	console.log("Message received");
	// Pick out a random background action
	var rand = Math.floor(Math.random() * allBackgroundActions.length);
	//allBackgroundActions[rand]();
	allBackgroundActions[1](); //for manual testing
});
