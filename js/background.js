function registerDeclaration() {
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
}

// chrome bug: chrome.runtime.onInstalled so use work around
if (chrome.extension.inIncognitoContext) {
  registerDeclaration();
} else {
  chrome.runtime.onInstalled.addListener(registerDeclaration);
}

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file:"js/highlight.js"});
});
