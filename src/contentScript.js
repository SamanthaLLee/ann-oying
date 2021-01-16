// Functions for each inconvenience 

var changeFontSize = function() {
	chrome.fontSettings.setDefaultFontSize({pixelSize: 150}, function())
}

var changeFontStyle = function() {
	chrome.tabs.query({currentWindow: true}, function(tabs){
		chrome.fontSettings.setFont( { genericFamily: 'cursive', script: 'Nkgb', fontId: 'MS PGothic' } );
	});
}
	
changeFontStyle()

// Listeners
