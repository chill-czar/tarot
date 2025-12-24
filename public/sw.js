// @ts-nocheck
const CACHE_NAME = "tarot-image-cache-v1";
const CRITICAL_ASSETS = [
  "/hero-bg.png",
  "/hero-cta-bg-left.png",
  "/hero-cta-bg-right.png",
  "/section-bg.png",
  "/service-card-bg.png",
];

// Install Event: Pre-cache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Pre-caching critical assets");
      return cache.addAll(CRITICAL_ASSETS);
    }),
  );
  self.skipWaiting();
});

// Activate Event: Cleanup old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("[SW] Cleaning up old cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
  self.clients.claim();
});

// Fetch Event: Cache-first strategy for images
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Intercept image requests (including Next.js optimized images)
  const isImage =
    url.pathname.match(/\.(png|jpg|jpeg|svg|webp|avif|ico)$/) ||
    url.pathname.startsWith("/_next/image");

  if (isImage) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((networkResponse) => {
          // Check if we received a valid response
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== "basic"
          ) {
            // Special handling for cross-origin or non-standard next/image requests if necessary
            // For now, only cache standard successful responses
            if (!url.pathname.startsWith("/_next/image")) {
              return networkResponse;
            }
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        });
      }),
    );
  }
});

// Message listener for manual prefetching
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "PREFETCH_IMAGES") {
    const urls = event.data.urls || [];
    console.log("[SW] Prefetching assets:", urls);
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(urls);
    });
  }
});
