// Options for each action
// Content actions first, background second
// Check allContentActions and allBackgroundActions for order

var allOptions = [
	{ // changeImages
      iconUrl: './img/img.png',
      type: 'basic',
      title: 'Those are some ugly images on your screen.',
      message: 'I think you need a little more Ann.',
      priority: 1,
  },
	{ // rickRoll
      iconUrl: './img/rickroll.gif',
      type: 'basic',
      title: ';)',
      message: 'Rick Astley is all you need.',
      priority: 1,
  },
	{ // setZoom
      iconUrl: './img/setZoom.jpg',
      type: 'basic',
      title: 'Can ya see this???',
      message: 'Or should we zoom in even more?',
      priority: 1,
  }, 
	{ // deleteWindow
      iconUrl: './img/anne.png',
      type: 'basic',
      title: 'Oops! Hope you didn\'t need that',
      message: '(Just kidding)',
      priority: 1,
  },
	{ // deleteTab
      iconUrl: './img/anne.png',
      type: 'basic',
      title: 'Oops! Hope you didn\'t need that',
      message: '(Just kidding)',
      priority: 1,
  },
	{ // muteTab
      iconUrl: './img/mutetab.png',
      type: 'basic',
      title: 'Ah, the sweet sound of silence.',
      message: 'I like it better this way.',
      priority: 1,
  },
	{ // changeFontSize
      iconUrl: './img/img.png',
      type: 'basic',
      title: 'Stop straining your eyes! Here, I\'ll help.',
      message: 'Should I make it even bigger?',
      priority: 1,
  },
	{ // duplicate
      iconUrl: './img/duplicatetab.gif',
      type: 'basic',
      title: 'Double trouble',
      message: 'The more the merrier!',
      priority: 1,
  },
	{ // openTopSites
      iconUrl: './img/img.png',
      type: 'basic',
      title: 'This is your favorite site, right?',
      message: 'You\'re welcome.',
      priority: 1,
  },
	{ // annePopsUp
      iconUrl: './img/annepopsup.jpg',
      type: 'basic',
      title: 'Boo!',
      message: 'Did I scare you?',
      priority: 1,
  },
	{ // reloadTab
      iconUrl: './img/refreshing.jpg',
      type: 'basic',
      title: 'Isn\'t that refreshing? Like me frockling about in this meadow',
      message: 'Hope I interrupted something.',
      priority: 1,
  }
]

var numActions = allOptions.length;

chrome.storage.sync.set({'allOptions': allOptions}, function() {
   console.log("allOptions set");
});

chrome.storage.sync.set({'numActions': numActions}, function() {
   console.log("numActions set.");
});
