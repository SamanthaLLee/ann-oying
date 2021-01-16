// Functions for each inconvenience 
var rickRoll = function() {
	chrome.tabs.create("https://www.youtube.com/watch?v=DLzxrzFCyOs", function(){})
}

var duplicate = function(){
	chrome.tabs.query({active: true}, function(tabs){ 
		max = tabs.length - 1;
		rng = Math.random() * (max - 1) + 1;
		chrome.tabs.duplicate(rng);
	});
}

var openTopSites = function(){
	chrome.topSites.get(sitesToOpen[], function(){}){
		max = sitesToOpen.length - 1;
		rng = Math.random() * (max - 1) + 1;
		chrome.tabs.create(sitesToOpen[rng].url);
	}
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
