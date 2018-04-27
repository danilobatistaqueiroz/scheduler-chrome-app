chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('scheduler.html', {
    'outerBounds': {
      'width': 210,
      'height': 270
    }
  });
});