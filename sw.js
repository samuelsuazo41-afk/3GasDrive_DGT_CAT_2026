const CACHE_NAME = 'gasdrive-cat-v8.11-rosso';
const BASE_PATH = '/3GasDrive_DGT_CAT_2026/';

const FILES_TO_CACHE = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'app.js',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'icon-192.png',
  BASE_PATH + 'icon-512.png'
];

// Instal·la i guarda al cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cachejant arxius');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activa i esborra caches velles
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME) {
          console.log('[SW] Esborrant cache vella:', key);
          return caches.delete(key);
        }
      }));
    }).then(() => self.clients.claim())
  );
});

// Intercepta les peticions: serveix del cache si hi ha, sino va a xarxa
self.addEventListener('fetch', event => {
  // Només GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si està al cache, el retorna
        if (response) {
          return response;
        }
        
        // Si no, va a xarxa
        return fetch(event.request).then(networkResponse => {
          // Si la resposta és OK, la guarda al cache per la pròxima
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Si falla xarxa i no hi ha cache, mostra index.html per que no quedi en blanc
          if (event.request.mode === 'navigate') {
            return caches.match(BASE_PATH + 'index.html');
          }
        });
      })
  );
});