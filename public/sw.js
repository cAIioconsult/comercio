const CACHE_VERSION = "caffino-v1";
const APP_CACHE = `${CACHE_VERSION}-app`;
const ASSET_CACHE = `${CACHE_VERSION}-assets`;
const CURRENT_CACHES = [APP_CACHE, ASSET_CACHE];
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/fonts/font-01.woff2",
  "/fonts/font-02.woff2",
  "/fonts/font-03.woff2",
  "/images/misc/misc-01.svg",
  "/images/misc/misc-02.avif",
  "/images/misc/misc-03.avif",
  "/images/hero/hero-01.avif",
  "/images/our-story/our-story-01.avif",
  "/images/why-choose/why-choose-01.avif",
  "/images/features/features-01.svg",
  "/images/features/features-02.svg",
  "/images/features/features-03.svg",
  ...Array.from({ length: 12 }, (_, index) => `/images/menu/menu-${String(index + 1).padStart(2, "0")}.avif`),
  ...Array.from({ length: 6 }, (_, index) => `/images/testimonials/testimonials-${String(index + 1).padStart(2, "0")}.avif`),
  ...Array.from({ length: 6 }, (_, index) => `/images/gallery/gallery-${String(index + 1).padStart(2, "0")}.avif`),
  "/icons/caffino-192.png",
  "/icons/caffino-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(APP_CACHE).then(async (cache) => {
      await Promise.all(PRECACHE_URLS.map((url) => cacheResource(cache, url)));

      try {
        const shellResponse = await fetch("/", { cache: "no-store" });
        if (shellResponse.ok) {
          await cache.put("/", shellResponse.clone());
          const shell = await shellResponse.text();
          const builtAssets = [...shell.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)].map((match) => match[1]);
          await Promise.all(builtAssets.map((url) => cacheResource(cache, url)));
        }
      } catch {
        // A failed shell request must not abort service-worker installation.
      }
    }).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all(
      CURRENT_CACHES.map((cacheName) => caches.open(cacheName)),
    ).then(() =>
      caches.keys().then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName.startsWith("caffino-") && !CURRENT_CACHES.includes(cacheName))
            .map((cacheName) => caches.delete(cacheName)),
        ),
      ),
    ).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin || request.method !== "GET") {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  if (["style", "script", "image", "font", "manifest"].includes(request.destination)) {
    event.respondWith(cacheFirstAsset(request));
  }
});

async function cacheResource(cache, url) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (response.ok) {
      await cache.put(url, response);
    }
  } catch {
    // A failed precache request must not abort service-worker installation.
  }
}

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(APP_CACHE);
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    return (await caches.match(request)) || caches.match("/");
  }
}

async function cacheFirstAsset(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(ASSET_CACHE);
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    return Response.error();
  }
}
