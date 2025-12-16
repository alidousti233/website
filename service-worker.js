self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('peyam-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'enhancer.js',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
