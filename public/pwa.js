const cacheName = "kyzune"
const appCore = [
	"/",
	"styles.css",
	"getFox.js",
	"abilities.js",
	"kz.webmanifest",
	"favicon.ico",
	"assets/logo-full.png",
	"assets/logo-upscale.png"
]

self.addEventListener("install", e => {
	e.waitUntil(caches.open(cacheName).then(cache => {
		return cache.addAll(appCore)
	}))
})

self.addEventListener("fetch", e => {
	e.respondWith(caches.open(cacheName).then(cache => {
		return cache.match(e.request.url).then(response => {
			if (response) return response

			return fetch(e.request.url).then(response => response)
		})
	}))
})