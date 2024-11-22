import React, { useState } from "react";

function App() {
    const [url, setUrl] = useState("");
    const [price, setPrice] = useState("");

    const fetchPrice = () => {
       /* global chrome */
        chrome.runtime.sendMessage(
            { action: "getPrice", url },
            (response) => {
                if (response.price) {
                    setPrice(response.price);
                } else {
                    setPrice("Error fetching price");
                }
            }
        );
    };

    return (
        <div>
            <h1>Price Tracker</h1>
            <input
                type="text"
                placeholder="Enter product URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={fetchPrice}>Get Price</button>
            <p>{price && `Price: ${price}`}</p>
        </div>
    );
}

export default App;
