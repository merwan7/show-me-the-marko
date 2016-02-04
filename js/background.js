chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            css: ['[id^="w0"], [id*="-w0"], #markoWidgets'] // this is risky, but I can't use #markoWidgets because it's display: none
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file:"js/highlight.js"});
});
