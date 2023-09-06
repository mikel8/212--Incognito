chrome.action.onClicked.addListener(function(tab) {
  chrome.windows.create({ url: tab.url, incognito: true });
});


