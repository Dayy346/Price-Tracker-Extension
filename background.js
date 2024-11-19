
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getPrice") {
      fetch("http://localhost:3000/get-price", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: message.url }),
      })
          .then((response) => response.json())
          .then((data) => sendResponse({ price: data.price }))
          .catch((error) => {
              console.error("Error fetching price:", error);
              sendResponse({ error: "Could not fetch price" });
          });
      return true; // Keep the response channel open for async calls
  }
});
