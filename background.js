chrome.webRequest.onAuthRequired.addListener(
  function (details, callbackFn) {
    if (details.isProxy == true) {
      callbackFn({
        authCredentials: {
          username: "harpreetsingh0221",
          password: "xJqZmaIzHY",
        },
      });
    }
  },
  {
    urls: ["<all_urls>"],
  },
  ["asyncBlocking"]
);

        const defaultFilters = [
          "*://*.doubleclick.net/*",
          "*://partner.googleadservices.com/*",
          "*://*.googlesyndication.com/*",
          "*://*.google-analytics.com/*",
          "*://creative.ak.fbcdn.net/*",
          "*://*.adbrite.com/*",
          "*://*.exponential.com/*",
          "*://*.quantserve.com/*",
          "*://*.scorecardresearch.com/*",
          "*://*.zedo.com/*",
        ]


var handleRefresh = () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
  });
}

var adblockFunction = function(details) { return { cancel: true }}

var setAdblock = () => {
  chrome.webRequest.onBeforeRequest.addListener(
    adblockFunction,
    { urls: defaultFilters },
    ["blocking"]
  );
}

var adblockStatus = localStorage.getItem('adblock')

if(adblockStatus) {
  setAdblock()    
}
        
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
      if (request.adblockStatus) {
        setAdblock()
        handleRefresh()
      } else if (request.adblockStatus == false) {
        chrome.webRequest.onBeforeRequest.removeListener(adblockFunction);
        handleRefresh()
      }
  }
);
     

