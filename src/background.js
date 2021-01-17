var allOptions = [];
var numActions = 0;
var lastWebsite = "";

// Functions for each inconvenience 
var rickRoll = function() {
	//chrome.tabs.create({url:"https://www.youtube.com/watch?v=DLzxrzFCyOs"})
	console.log("rickRoll success");
}

var reloadTab= function(){
	chrome.tabs.reload(false, function(){})
	console.log("reloadTab success");
}

var setZoom= function() {
	chrome.tabs.setZoom(1.25, function(){})
	console.log("setZoom success");
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
	console.log("openTopSites success");
}

var deleteWindow = function() {
	console.log("deleteWindow");
	//chrome.windows.remove(WINDOW_ID_CURRENT, function(){})
}

var deleteTab = function() {
	console.log("deleteTab");
	chrome.tabs.query({active: true}, function(tabs){
		chrome.tabs.remove(tabs[0].id, function(){})
	});
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

var checkWebsite = function(tabId,changeInfo,tab){
	var opt = { // changeImages
      iconUrl: '/img.png',
      type: 'basic',
      priority: 1,
  };
	
	if(changeInfo.url.includes("youtube") && lastWebsite !== "youtube"){
		opt.title = 'Youtube? Are you procrastinating again?';
		opt.message = 'Whatever, it\'s not like you have anything better to do.';
		lastWebsite = "youtube";
		chrome.notifications.create('', opt, function() {});
	}else if(changeInfo.url.includes("spotify") && lastWebsite !== "spotify"){
		opt.title = 'Spotify? Please no.';
		opt.message = 'I\'m begging you not to submit me to your horrible taste in music.';
		lastWebsite = "spotify";
		chrome.notifications.create('', opt, function() {});
	}else if(changeInfo.url.includes("stackoverflow") && lastWebsite !== "stackoverflow"){
		opt.title = 'Really? Stack Overflow?';
		opt.message = 'We all struggle a little, but this is just ridiculous.';
		lastWebsite = "stackoverflow";
		chrome.notifications.create('', opt, function() {});
	}else{
		lastWebsite = "";
	}
}

// Maintaining a list of all functions in the background script
var allBackgroundActions = [
	rickRoll,
	reloadTab, 
	setZoom,
	duplicate, 
	openTopSites,
	annePopsUp,
	deleteWindow,
	deleteTab,
	muteTab,
	changeFontSize
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
			allBackgroundActions[rand](); //allBackgroundActions[4](); //for manual testing
			chrome.notifications.create('', allOptions[(numActions - allBackgroundActions.length) + rand], function() { 
				//console.log("Last error:", chrome.runtime.lastError); 
			});
		}else{
			var num = request.num;
			chrome.notifications.create('', allOptions[num], function() { 
				//console.log("Last error:", chrome.runtime.lastError); 
			});
		}
<<<<<<< HEAD
});
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){checkWebsite(tabId,changeInfo,tab)});
=======
>>>>>>> 082f6290505ce7ce953b0943f22cf799bdafdf88
