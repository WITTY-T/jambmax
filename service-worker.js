const CACHE_NAME = 'jamb-max-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/dashboard.html',
    '/css/style.css',
    '/js/data.js',
    '/js/db.js',
    '/js/auth.js',
    '/js/exam.js',
    '/js/ai.js',
    '/js/app.js',
    '/js/payment.js',
    '/js/flashcards.js',
    '/js/notifications.js',
    '/js/leaderboard.js',
    '/js/settings.js',
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js',
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js'
];

// Install
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch
self.addEventListener('fetch', event => {
    const { request } = event;
    
    // API calls - network first, cache fallback
    if (request.url.includes('firestore') || request.url.includes('googleapis')) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
                    return response;
                })
                .catch(() => caches.match(request))
        );
        return;
    }
    
    // Static assets - cache first, network fallback
    event.respondWith(
        caches.match(request)
            .then(cached => {
                if (cached) return cached;
                
                return fetch(request)
                    .then(response => {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
                        return response;
                    })
                    .catch(() => {
                        // Return offline fallback for HTML
                        if (request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                    });
            })
    );
});

// Background sync
self.addEventListener('sync', event => {
    if (event.tag === 'sync-data') {
        event.waitUntil(syncData());
    }
});

async function syncData() {
    const clients = await self.clients.matchAll();
    clients.forEach(client => {
        client.postMessage({ type: 'SYNC_DATA' });
    });
}
self.addEventListener('sync', event => {
    if (event.tag === 'sync-data') {
        event.waitUntil(syncData());
    }
    if (event.tag === 'daily-reminder') {
        event.waitUntil(showNotification('Study Reminder', 'Time for your daily JAMB practice!'));
    }
});

async function showNotification(title, body) {
    await self.registration.showNotification(title, {
        body,
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png'
    });
}