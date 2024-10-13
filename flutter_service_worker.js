'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "792be6e65b0990c2ac6aa7fc687cf03a",
"assets/AssetManifest.bin.json": "5a34f4b9a260fc71a776f2878ffdae05",
"assets/AssetManifest.json": "909af71969ccf47398dc6bbbab7a2c34",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/HelveticaNowDisplay-ExtraBold.ttf": "d62cd5734d3a8ec9c487fa9aafcd9c68",
"assets/assets/fonts/HelveticaNowDisplay-Medium.ttf": "53b5d05abde1c9192de6f6a954a5fef9",
"assets/assets/fonts/HelveticaNowDisplay-Regular.ttf": "9632144b89660f0f032a3a0a01e533c7",
"assets/assets/images/alok.jpg": "402fa319a13e5ff5aad5bcfedabdf75c",
"assets/assets/images/android.png": "43b3444519d5f09c1807642ab00f7858",
"assets/assets/images/app.png": "2097592043bf6f86152a38634ceab747",
"assets/assets/images/arrowhead-up.png": "1ea3dc170d4f90fd9bac0b905ab425ce",
"assets/assets/images/bg_img_2.png": "05f9366b25efab54ebdc4a8a3f840647",
"assets/assets/images/blog.png": "cc7380c398e6ea45bff2a56a4d17f3d9",
"assets/assets/images/cipherSchools.png": "a15c26a1c53bfd92bafbf48163bc89e1",
"assets/assets/images/codolio.png": "1a817511e5064d5b7935a3c94d23787a",
"assets/assets/images/contact_icon.png": "332a94f5463bdc9dd03f1edbf466ae9b",
"assets/assets/images/cursor.png": "3caf09ec7bbf6ebbc1884791f3d1ff0a",
"assets/assets/images/desktop.png": "ad7ddd5dbc79fa0a7d6d033c37ddb806",
"assets/assets/images/download.png": "2d060656c52190ea70e1369d070a7df6",
"assets/assets/images/email.png": "0583ba9496da3d94af09d31e16f881f5",
"assets/assets/images/fiverr.png": "b09388ddb27c59ec784e16a4fb0b492d",
"assets/assets/images/flutter.png": "c17a21f0dda5a09b4bb6c53b2282df65",
"assets/assets/images/github.png": "debe7d123136dc24c8424dc950f94ca9",
"assets/assets/images/google-play.png": "c2f7cb5d825facf8539eb2148f728f21",
"assets/assets/images/graphic.png": "36a92cf63221f1dd5f7ffee8a2949182",
"assets/assets/images/hand.png": "4fda2189f83f90fb67f1d6bca807c013",
"assets/assets/images/harish.jpg": "ae32bb6bbe6aed5f6fcdeac1653fd241",
"assets/assets/images/hi.gif": "a8a03e12ce08a2d350e56855c86ba08b",
"assets/assets/images/Hover.png": "69d6ec3d7c1be11ffe53d0229bb3a6ee",
"assets/assets/images/Hover_flip.png": "df97236aab3ec332d72669a82b374385",
"assets/assets/images/Intreaction_design.png": "104ddac74cb693f00ba3cac288957483",
"assets/assets/images/lamp.png": "82ce89808abc7c779aacff48af723e56",
"assets/assets/images/landing_image1.jpg": "569a92e10d9fee5263ef2e32a233518a",
"assets/assets/images/landing_image2.jpg": "99ee37e20fba1249b834ad2ed289c8d0",
"assets/assets/images/landing_image3.jpg": "f2be4888063033db0c0cc19a809fda96",
"assets/assets/images/linkedIn.png": "f6aea02515bb123f0760dff656f90898",
"assets/assets/images/logo.png": "0593849dafe54e9ab90616c94fbc4b7b",
"assets/assets/images/mannat.jpg": "85766187439d90bb3fb51b9c52fc9f57",
"assets/assets/images/night.png": "10c76f05a94233767ecffbc692375fa2",
"assets/assets/images/piyush.jpg": "f108fac389b2c179f32d1f602a7f8650",
"assets/assets/images/qrcode_app_image.jpg": "00775b11cf658369eb2b5b28dd3a2ad0",
"assets/assets/images/rapid.png": "3744a57bb225d93059bc7c3f055109bb",
"assets/assets/images/recent_work_bg.png": "786558e55743bf2de6cf8a90301191c5",
"assets/assets/images/safari_retreats_image.png": "b28cf2b2b3922890d6394ed67e117066",
"assets/assets/images/saiTeja.jpg": "d48a57656c737038b4dc3f8a2050df75",
"assets/assets/images/sign.png": "3e46bba147660f938aebd42ff3c3ea25",
"assets/assets/images/sign_white.png": "e120a7e5550f851af908e95f52539ef8",
"assets/assets/images/speaker.png": "e7dea911564be95c6dde65abbaf98c3a",
"assets/assets/images/stacked-circles.png": "f2befd0509a54bf18100337c0a094235",
"assets/assets/images/StockCake-Elegant%2520Wavy%2520Pattern_1720961147.jpg": "623fc072b0898a1747f4dec376528877",
"assets/assets/images/ui.png": "bd174b5760899a0e8328bf3140fbb01c",
"assets/assets/images/Vmake-1728826426.png": "26cf3be12c2e3b7636e10c4fd1782c2b",
"assets/assets/images/walnutHealth.png": "0175fa9fe86394d57b60578251a40938",
"assets/assets/images/whats_app.png": "031110a4836eb303b0ca5ab048c21566",
"assets/assets/images/while.png": "8242c2be959ad87749663851bd113a80",
"assets/assets/images/work1.png": "3dd5d92ecd8c6434ef1070aecdb5a9bd",
"assets/assets/images/work2.png": "7f92e51c21d191664ff4b2e18326368d",
"assets/assets/images/work3.png": "dca65bdd4339eaa5d90c5162cdf1e26d",
"assets/assets/images/work4.png": "fae92abff912ee3471b8fbb4c38a4561",
"assets/assets/images/work5.png": "fc54aed5b7a1ff8cd1728bf265b75b72",
"assets/assets/images/work6.png": "8446b77f407cd22e143a066316464cc0",
"assets/assets/images/work62.png": "6fa8de400c1a4b28bf1df680afd49b58",
"assets/assets/images/yui.png": "b7eccff75e4b59ac0369d1fcc73af0c5",
"assets/FontManifest.json": "83c3d7625dc91665dfaaf2a5682a21da",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "26c0205d199ef8f2985797bd4947e271",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "721465fa097b1f937e4756312690de1e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ac1094f3cfde6a5f8e380b0b0c672599",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "bd386d44295c0516093b7b0f87f14033",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
