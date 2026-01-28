(function () {
  "use strict";

  const toggle = document.getElementById("toggle");
  const status = document.getElementById("status");
  const sharedKeyInput = document.getElementById("shared-key");

  function setStatus(enabled) {
    toggle.checked = !!enabled;
    status.textContent = enabled ? "Enabled" : "Disabled";
    status.classList.toggle("on", !!enabled);
  }

  chrome.storage.local.get({ enabled: true, sharedKey: "123456" }, function (data) {
    setStatus(!!data.enabled);
    if (sharedKeyInput) sharedKeyInput.value = data.sharedKey || "";
  });

  toggle.addEventListener("change", function () {
    const enabled = toggle.checked;
    setStatus(enabled);
    chrome.storage.local.set({ enabled: enabled });
  });

  if (sharedKeyInput) {
    sharedKeyInput.addEventListener("input", function () {
      chrome.storage.local.set({ sharedKey: sharedKeyInput.value });
    });
  }
})();
