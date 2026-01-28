(function () {
  "use strict";

  const EXTENSION_SOURCE = "discord-steg-extension";

  function postEnabled(enabled) {
    window.postMessage(
      {
        source: EXTENSION_SOURCE,
        type: "set-enabled",
        enabled: !!enabled
      },
      "*"
    );
  }

  function postSharedKey(key) {
    window.postMessage(
      {
        source: EXTENSION_SOURCE,
        type: "set-key",
        key: typeof key === "string" ? key : ""
      },
      "*"
    );
  }

  function init() {
    chrome.storage.local.get({ enabled: true, sharedKey: "123456" }, function (data) {
      const enabled = !!data.enabled;
      postEnabled(enabled);
      postSharedKey(data.sharedKey);
    });
  }

  window.addEventListener("message", function (event) {
    if (event.source !== window) return;
    const data = event.data;
    if (!data || data.source !== EXTENSION_SOURCE) return;
    if (data.type === "get-enabled") {
      chrome.storage.local.get({ enabled: true }, function (stored) {
        postEnabled(!!stored.enabled);
      });
      return;
    }
    if (data.type === "get-key") {
      chrome.storage.local.get({ sharedKey: "123456" }, function (stored) {
        postSharedKey(stored.sharedKey);
      });
      return;
    }
    if (data.type === "fetch-request" && data.id && data.url) {
      chrome.runtime.sendMessage({ type: "dhi-fetch", url: data.url }, function (response) {
        window.postMessage(
          {
            source: EXTENSION_SOURCE,
            type: "fetch-response",
            id: data.id,
            ok: response && response.ok,
            status: response && response.status,
            data: response && response.data,
            error: response && response.error
          },
          "*"
        );
      });
    }
  });

  chrome.runtime.onMessage.addListener(function (message) {
    if (!message || message.type !== "discord-steg-set-enabled") return;
    postEnabled(!!message.enabled);
  });

  chrome.storage.onChanged.addListener(function (changes, area) {
    if (area !== "local") return;
    if (changes.enabled) postEnabled(!!changes.enabled.newValue);
    if (changes.sharedKey) postSharedKey(changes.sharedKey.newValue);
  });

  init();
})();
