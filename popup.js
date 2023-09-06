document.addEventListener('DOMContentLoaded', function() {
  var openIncognitoButton = document.getElementById('openIncognito');
  openIncognitoButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var tab = tabs[0];
      chrome.windows.create({ url: tab.url, incognito: true });
    });
  });
});
