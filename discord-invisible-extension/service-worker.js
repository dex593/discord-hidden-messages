function base64EncodeBytes(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (!message || message.type !== "dhi-fetch") return;
  const url = message.url;
  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        sendResponse({ ok: false, status: response.status });
        return null;
      }
      return response.arrayBuffer().then(function (buffer) {
        const bytes = new Uint8Array(buffer);
        sendResponse({ ok: true, data: base64EncodeBytes(bytes) });
        return null;
      });
    })
    .catch(function (error) {
      sendResponse({ ok: false, error: String(error) });
    });
  return true;
});
