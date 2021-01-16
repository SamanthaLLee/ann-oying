// Number of all actions in the background AND content scripts
var numActions = 5;

// Time between actions (ms)
var duration = 1000;

// Functions for each inconvenience 
var changeFontSize = function() {
	chrome.fontSettings.setDefaultFontSize({pixelSize: 150}, function());
}

var changeFontStyle = function() {
	chrome.tabs.query({currentWindow: true}, function(tabs){
		chrome.fontSettings.setFont( { genericFamily: 'cursive', script: 'Nkgb', fontId: 'MS PGothic' } );
	});

var allContentActions = [
	changeFontSize,
	changeFontStyle
]

var pickAction = function() {
	// Pick out a random action
	var rand = Math.floor(Math.random() * numActions);	
	if(rand > allContentActions.length-1){
		// If rand corresponds to an action in the background script, 
		// we must send a message to the background script
		chrome.runtime.sendMessage({msg: "Sending message"}, function(response) {
    	//console.log(response.status);
    });
	}else{
		// Otherwise, we can execute the corresponding function
		allContentActions[rand]();
	}
}
 
// Calls pickAction periodically
function main (evt) {
    var interval = window.setInterval(pickAction, duration);
}
	
// Wait for page to fully load before commencing the hijinks
window.addEventListener ("load", main, false);