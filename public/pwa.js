const cacheName = "kyzune"
const appCore = [
	"/",
	"styles.css",
	"getFox.js",
	"manifest.json",
	"favicon.ico",
	"favicon-full.png",
	"favicon-upsc.png"
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