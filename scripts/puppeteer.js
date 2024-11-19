const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Price Tracker API is running!");
});

// Your existing /get-price route
app.post("/get-price", async (req, res) => {
  const { url } = req.body;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url);
    const price = await page.$eval("#priceblock_ourprice", (el) =>
      el.textContent.trim()
    );
    await browser.close();
    res.json({ price });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Could not fetch price" });
  }
});

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));
