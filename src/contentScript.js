<<<<<<< Updated upstream
// Functions for each inconvenience 

var changeHTML = function() {
=======
// Number of all actions in the background AND content scripts
var numActions = 5;

// Time between actions (ms)
var duration = 0;

// Functions for each inconvenience 

var allContentActions = [

]

var pickAction = function() {
	// Pick out a random action
	var rand = Math.floor(Math.random() * numActions);
	if(10 > allContentActions.length-1){
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
function main (event) {
    var interval = window.setInterval(pickAction, duration);
}
>>>>>>> Stashed changes
	
}

// Listeners
