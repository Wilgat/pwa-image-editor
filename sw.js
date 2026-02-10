// Basic caching service worker
const CACHE_NAME = 'image-editor-cache-v1';
const urlsToCache = [
  './',
  './index.html'
  // Add more later: your CSS, JS, icons, e.g. './icon-192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});