
const CACHE_NAME = 'electrical-calculations-v2';

const APP_SHELL = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key =>
            key.startsWith('electrical-calculations-') &&
            key !== CACHE_NAME
          )
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;

    try {
      const response = await fetch(event.request);

      if (
        response.ok &&
        new URL(event.request.url).origin === self.location.origin
      ) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(event.request, response.clone());
      }

      return response;
    } catch (error) {
      if (event.request.mode === 'navigate') {
        const offlinePage = new URL(
          'index.html',
          self.registration.scope
        ).href;

        return (await caches.match(offlinePage)) || Response.error();
      }

      throw error;
    }
  })());
});
