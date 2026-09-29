# India Canteen — Digital Menu & WhatsApp Ordering

A responsive static website based on the supplied India Canteen menu.

## Features
- All menu items from the supplied 3 menu pages
- Search and category filters
- Variant selection for Veg/Egg/Paneer/Chicken items
- **Add** button to add to cart
- **Order** button to add and immediately open cart
- Quantity controls and live total calculation
- Tax-inclusive bill
- Customer/table/order-type details
- Print-ready bill
- WhatsApp order message containing item list + quantities + total
- Uses the supplied menu artwork as visual highlights
- No backend required

## Setup

1. Open `app.js`.
2. Change:
   ```js
   const WHATSAPP_NUMBER = "919999999999";
   ```
   to the canteen's WhatsApp number in international format, without `+`, spaces, or hyphens.
3. Open `index.html` locally, or deploy the entire folder to Vercel/Netlify/GitHub Pages.

## Deploy on Vercel
- Import the folder/repository.
- Framework preset: Other
- Build command: leave empty
- Output directory: `.`
- Deploy.

## Important
The website does not process online payments. It generates a bill and sends the order to WhatsApp. A payment gateway can be added later if required.
