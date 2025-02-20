// public/service-worker.js
const CACHE_NAME = "my-pwa-cache-v1"
const urlsToCache = [
  "/",
  "/index.html",
  "/styles/app.css",
  "/scripts/main.js",
  // Add other assets you want to cache
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    }),
  )
})
