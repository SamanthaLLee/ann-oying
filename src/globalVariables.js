// Options for each action
// Content actions first, background second
// Check allContentActions and allBackgroundActions for order

var allOptions = [
	{ // changeFontStyle
      iconUrl: '/img.png',
      type: 'basic',
      title: 'Placeholder.',
      message: '?',
      priority: 1,
  },
	{ // rickRoll
      iconUrl: '/img.png',
      type: 'basic',
      title: ';)',
      message: 'Rick Astley is all you need.',
      priority: 1,
  },
	{ // setZoom
      iconUrl: '/img.png',
      type: 'basic',
      title: 'Can ya see this???',
      message: '',
      priority: 1,
  }, 
	{ // deleteWindow
      iconUrl: '/img.png',
      type: 'basic',
      title: 'Oops! Hope you didn\'t need that',
      message: '(Just kidding)',
      priority: 1,
  },
	{ // muteTab
      iconUrl: '/img.png',
      type: 'basic',
      title: 'Ah, the sweet sound of silence.',
      message: 'I like it better this way.',
      priority: 1,
  },
	{ // changeFontSize
      iconUrl: '/img.png',
      type: 'basic',
      title: 'Haha!',
      message: '',
      priority: 1,
  },
	{ // changeFontStyle
      iconUrl: '/img.png',
      type: 'basic',
      title: 'Let\'s have a change of aesthetics.',
      message: 'Gothic is superior, don\'t you think?',
      priority: 1,
  },{ // changeFontStyle
      iconUrl: '/img.png',
      type: 'basic',
      title: 'Let\'s have a change of aesthetics.',
      message: 'Gothic is superior, don\'t you think?',
      priority: 1,
  },{ // changeFontStyle
      iconUrl: '/img.png',
      type: 'basic',
      title: 'Let\'s have a change of aesthetics.',
      message: 'Gothic is superior, don\'t you think?',
      priority: 1,
  },{ // changeFontStyle
      iconUrl: '/img.png',
      type: 'basic',
      title: 'Let\'s have a change of aesthetics.',
      message: 'Gothic is superior, don\'t you think?',
      priority: 1,
  }
]

var numActions = 10;

chrome.storage.sync.set({'allOptions': allOptions}, function() {
   console.log("allOptions set");
});

chrome.storage.sync.set({'numActions': numActions}, function() {
   console.log("numActions set.");
});
