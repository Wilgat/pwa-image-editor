Here’s a clean, modern, and concise `README.md` tailored for your new PWA — a simple digital name card with offline support, install button, and QR code.

Choose the version that matches your final decision (dynamic QR vs static `qr.png`).

### Version A – Using dynamic QR code (no extra qr.png file)

```markdown
# Digital Name Card PWA

A clean, minimal, installable Progressive Web App that displays a personal/business name card.

Perfect for sharing your contact info, portfolio link, or digital business card via a scannable QR code — works offline after first visit.

🌐 **Live Demo:** https://wilgat.github.io/namecard/

## Features

- Displays your `namecard.png` (responsive: full-width on mobile, max 800px on desktop)
- QR code linking back to this page (scan to quickly open on another device)
- One-tap **"Install App"** button → add to home screen / desktop
- Fully offline-capable after installation (thanks to Service Worker)
- Clean dark theme, mobile-first design

## Screenshots

(Add 1–3 screenshots here later if you want — e.g. mobile view, installed icon, QR scan in action)

## How to Use / Install

1. Open https://wilgat.github.io/namecard/
2. Tap the **Install App** button (floating blue button bottom-right)
3. Choose "Add to Home Screen" (mobile) or "Install" (desktop Chrome/Edge)
4. Done! The app icon appears on your home screen / desktop — opens instantly, works offline

## Project Structure

```
.
├── index.html          # Main page (name card + QR + install logic)
├── manifest.json       # PWA metadata
├── sw.js               # Service Worker for offline caching
├── namecard.png        # Your name card image (this is the only real content)
├── icon-192.png
└── icon-512.png
```

## Technologies

- HTML + CSS (vanilla, no framework)
- Progressive Web App (PWA) features
- Service Worker for offline support
- Dynamic QR code via quickchart.io (no extra file needed)

## Customization

1. Replace `namecard.png` with your own design
2. Edit the title, colors, or text in `index.html`
3. (Optional) Change theme_color / background_color in `manifest.json`

## License

MIT License (or feel free to add your preferred license)

Made with ❤️ by Morris (wilgat)
```

### Version B – If you added a static `qr.png` file

Just replace the QR code line with this:

```markdown
- QR code linking back to this page (`qr.png` – fully offline)
```

And add this line under **Project Structure**:

```
├── qr.png              # Static QR code image (links to this page)
```

### Optional short & punchy version (if you prefer minimal README)

```markdown
# Name Card PWA

Simple offline digital business/name card.

**Live:** https://wilgat.github.io/namecard/

- Shows namecard.png
- QR code to this page
- Installable (Add to Home Screen)
- Works offline

Just replace `namecard.png` with your card and deploy.

Made by Morris
```

Pick whichever style you like — Version A is more complete and professional-looking.

Let me know if you want to add badges, GitHub stars encouragement, contribution section, or anything else! 😄