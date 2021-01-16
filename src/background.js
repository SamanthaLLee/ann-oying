var allOptions = [];
var numActions = 0;

// Functions for each inconvenience 
var rickRoll = function() {
	//chrome.tabs.create({url:"https://www.youtube.com/watch?v=DLzxrzFCyOs"})
	console.log("rickRoll success");
}

var reloadTab= function(){
	console.log("reloadTab");
	chrome.tabs.reload(false, function(){})

var setZoom= function() {
	console.log("setZoom");
	//chrome.tabs.setZoom(1.5, function(){})
}

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

var duplicate = function(){
	chrome.tabs.query({currentWindow: true}, function(tabs){ 
		//console.log(tabs);
		var rng = Math.floor(Math.random() * tabs.length);
		//console.log(rng);
		//console.log(tabs[rng].tabId);
		//chrome.tabs.duplicate(tabs[rng].id);
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
	console.log("openTopSites success");
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
	openTopSites,
	annePopsUp
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
			//console.log("Message received");
			// Pick out a random background action
			var rand = Math.floor(Math.random() * allBackgroundActions.length);
			allBackgroundActions[0](); //allBackgroundActions[4](); //for manual testing
			chrome.notifications.create('', allOptions[(numActions - allBackgroundActions.length) + rand], function() { 
				//console.log("Last error:", chrome.runtime.lastError); 
			});
		}else{
			var num = request.num;
			chrome.notifications.create('', allOptions[num], function() { 
				//console.log("Last error:", chrome.runtime.lastError); 
			});
		}
});

