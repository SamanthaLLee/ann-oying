var numActions = 0;

// Time between actions (ms)
var duration = 10000;

// Functions for each inconvenience 

var changeColor = function() {
	console.log("changeColor");
	document.body.style.backgroundColor = "red";
}

var allContentActions = [
 changeColor
]

var pickAction = function() {
	// Pick out a random action
	var rand = Math.floor(Math.random() * numActions);
	rand = 12;
	if(rand > allContentActions.length-1){
		// If rand corresponds to an action in the background script, 
		// we must send a message to the background script
		chrome.runtime.sendMessage({msg: "BG"}, function(response) {
    	console.log(response.status);
    });
	}else{
		// Otherwise, we can execute the corresponding function
		allContentActions[rand]();
		chrome.runtime.sendMessage({num: rand}, function(response) {
    	console.log(response.status);
    });
	}
}
 
// Calls pickAction periodically
function main(event) {
	chrome.storage.sync.get('numActions', function(result){
		numActions = result.numActions;
		console.log("got numActions");
	});
  var interval = window.setInterval(pickAction, duration);
}
	
// Wait for page to fully load before commencing the hijinks
window.addEventListener("load", main, false);