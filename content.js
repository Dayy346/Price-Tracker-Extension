
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getPrice') {
      const priceElement = document.querySelector('.product-price'); // Modify this based on your page's DOM
      const price = priceElement ? priceElement.textContent : null;
  
      sendResponse({ price: price || 'Price not found' });
    }
    return true;
  });
  