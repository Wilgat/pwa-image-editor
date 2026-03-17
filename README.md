# PWA Image Crop & Banner Editor

A simple, offline-capable Progressive Web App (PWA) for cropping images and adding a customizable banner/text overlay — perfect for quickly creating social media banners, YouTube thumbnails, profile covers, etc.

**Live Demo:**  
🌐 https://wilgat.github.io/pwa-image-editor/

## Features

- Upload any image
- Crop the image using sliders (X/Y offset, width, height)
- Add a semi-transparent black banner at the bottom
- Customize banner height and text font size
- Edit banner text directly (works on both desktop and mobile)
- Download the final edited image as PNG
- Installable as a PWA (works offline after first load)

## How to Install (Add to Home Screen / Desktop)

This app is a **Progressive Web App (PWA)** — you can install it to your device for a native-like experience.

### On Mobile (iPhone / Android)

1. Open the app in your browser:  
   https://wilgat.github.io/pwa-image-editor/
2. **If you see a blue banner at the bottom** saying "Install this editor to your home screen...", tap **Add to Home Screen**.
3. **If you don’t see the banner**:
   - Look for the **"Install App"** floating button (bottom-right corner)
   - Tap it → the install prompt will appear
4. Follow your browser’s instructions to add it to your home screen.

### On Desktop (Chrome / Edge)

1. Visit: https://wilgat.github.io/pwa-image-editor/
2. **If a blue install banner appears** at the bottom → click **Add to Home Screen** / **Install**
3. **If no banner appears**:
   - Look for the **"Install App"** button (bottom-right)
   - Click it to show the install prompt
4. Alternatively, click the **install icon** in the address bar (usually a small computer + down arrow)

**Note for Firefox users:** Firefox desktop has limited native PWA support. You may need the "PWAs for Firefox" extension or use Chrome/Edge for the best install experience.

## How to Use

1. **Upload an image** using the file input
2. Switch between **Crop** and **Banner** tabs
   - **Crop tab**: adjust position and size using sliders
   - **Banner tab**: change banner height (%) and font size
3. **Add/edit text**:
   - Click/tap inside the dark banner area at the bottom of the image
   - On **desktop**: an editable box appears — type and click outside to save
   - On **mobile**: a comfortable text area pops up — type and tap **Done**
4. When ready → click **Download Edited Image**

## Works Offline

Once installed (or after the first visit), the app can work offline thanks to the service worker.  
Perfect for editing images even without internet.

## Technologies

- HTML5 Canvas
- Vanilla JavaScript (no frameworks)
- Service Worker for offline support
- PWA manifest & install prompt

Enjoy!  
Feel free to fork, improve, or report issues.

Made with ❤️ by wilgat