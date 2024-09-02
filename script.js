chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request && request.action === "removeAd") {
    let intervalForAds = setInterval(() => {
      let ads = document.querySelector(".erd-ads-area");
      if (ads !== null) {
        ads.style.display = "none";
        let container = document.querySelector(".erd-container");
        if (container) {
          container.style.width = "100%";
        }
        clearInterval(intervalForAds);
      }
    }, 100);
  }
  sendResponse({ status: true });
});
