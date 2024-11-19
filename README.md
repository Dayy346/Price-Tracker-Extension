# Price Tracker Chrome Extension

## Overview

This Chrome Extension tracks product prices and notifies users when a price drop occurs. It uses **React.js** for the frontend, **Puppeteer.js** for scraping prices, and **Node.js** for the backend.

The backend server (with **Puppeteer**) scrapes product prices from eCommerce websites, while the frontend displays the price and sends requests to the backend for hourly real time updates.

---

## Features

- **Price Scraping**: Uses **Puppeteer.js** to scrape product prices from eCommerce sites.
- **User Interface**: Built with **React.js**, allowing users to input product URLs.
- **Chrome Extension**: Allows user interaction via popup.
- **Notifications**: Alerts users about price drops via Chrome notifications.
- **Background Script**: Manages communication between popup and backend.
- **Cross-site Functionality**: Works on various eCommerce websites (Amazon, Ebay, ect.).

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Puppeteer.js for scraping
- **Chrome Extension**: Manifest V3, background service worker, content scripts
- **Backend Server**: Node.js with Puppeteer
- **Puppeteer**: Headless browser for scraping data

---

## Backend and Frontend Communication

### Backend - Puppeteer Server

The backend, powered by **Node.js** and **Puppeteer**, handles price scraping. When the user inputs a product URL, the frontend sends a request to the **background.js** script, which communicates with the backend server.

1. **Frontend** sends product URL to the **background.js**.
2. **background.js** makes an HTTP POST request to the backend server.
3. **Puppeteer** scrapes the price and sends it back to **background.js**.
4. **background.js** forwards the price to the **React frontend**, which updates the UI.

---

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/price-tracker-extension.git

### referenced this youtube video https://www.youtube.com/watch?v=1d1YSYzuRzU&ab_channel=TomBaranowicz
