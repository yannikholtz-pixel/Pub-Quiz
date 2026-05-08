// Service Worker für die PWA-Installation.
// Strategie: nur statische Same-Origin-GET-Assets cachen, alles andere
// (Socket.IO, Giphy-GIFs, Google-Fonts, qrcode-CDN) immer übers Netz.

const CACHE = 'pubquiz-v1';
const SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './sounds.js',
  './manifest.json',
  './icons/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Socket.IO und externe Hosts immer ungecached durchreichen
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/socket.io/')) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((resp) => {
          if (resp && resp.ok && resp.type === 'basic') {
            const clone = resp.clone();
            caches.open(CACHE).then((c) => c.put(req, clone)).catch(() => {});
          }
          return resp;
        })
        .catch(() => cached); // offline → letzter bekannter Stand
      return cached || network;
    })
  );
});
