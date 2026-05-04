const CACHE_NAME = "translit-ed-v1";
const APP_SHELL_URL = new URL("./", self.location).toString();
const PRECACHE_URLS = [
  APP_SHELL_URL,
  new URL("./index.html", self.location).toString(),
  new URL("./index.css", self.location).toString(),
  new URL("./index.js", self.location).toString(),
  new URL("./translit-ed.js", self.location).toString(),
  new URL("./manifest.webmanifest", self.location).toString(),
  new URL("./images/meta-tags.png", self.location).toString(),
  new URL("./icons/16.png", self.location).toString(),
  new URL("./icons/48.png", self.location).toString(),
  new URL("./icons/180.png", self.location).toString(),
  new URL("./icons/192.png", self.location).toString(),
  new URL("./icons/512.png", self.location).toString(),
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(PRECACHE_URLS);
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const requestUrl = new URL(request.url);

  if (request.method !== "GET" || requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(APP_SHELL_URL, response.clone());
          }
          return response;
        } catch {
          const cachedAppShell = await caches.match(APP_SHELL_URL);
          if (cachedAppShell) {
            return cachedAppShell;
          }

          const cachedIndex = await caches.match(new URL("./index.html", self.location).toString());
          return cachedIndex ?? Response.error();
        }
      })(),
    );
    return;
  }

  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }

      const response = await fetch(request);
      if (response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    })(),
  );
});
