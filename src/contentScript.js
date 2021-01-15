// Functions for each inconvenience 

var createTab = function() {
	
}

var deleteWindow = function() {
	chrome.windows.remove(WINDOW_ID_CURRENT, function(){
		//this is a callback function if we want anything else to happen with the removal
	})
}

// Listeners
