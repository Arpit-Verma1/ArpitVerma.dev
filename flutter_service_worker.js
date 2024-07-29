'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "11a4f8bc35d87273356bd29f58591c8d",
"assets/AssetManifest.bin.json": "9366ea95229ee2e1d43a5e4aeae3ee8f",
"assets/AssetManifest.json": "125e85d9bc463cb40cfd2afc6d51e135",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/HelveticaNowDisplay-ExtraBold.ttf": "d62cd5734d3a8ec9c487fa9aafcd9c68",
"assets/assets/fonts/HelveticaNowDisplay-Medium.ttf": "53b5d05abde1c9192de6f6a954a5fef9",
"assets/assets/fonts/HelveticaNowDisplay-Regular.ttf": "9632144b89660f0f032a3a0a01e533c7",
"assets/assets/images/404err.svg": "c3f209aded0706c16530acd2694646bd",
"assets/assets/images/alok.jpg": "298f3e5bd0c6ab3f00f954287487cf8e",
"assets/assets/images/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/images/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/images/Arpit_Profile.png": "11d1485def88a4f9f512bcf94c6d17c4",
"assets/assets/images/Arpit_Profile1.png": "634ee85ecd74b5a5f641342b259ca4ce",
"assets/assets/images/arrowhead-up.png": "6debbfa27236d71812fcd3cbcbced73a",
"assets/assets/images/bg_img_2.png": "c171a8be13c3731ccdda9533cafc1806",
"assets/assets/images/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/images/cipherSchools.png": "5b2b88d0c430a3b1f2f1b4113e731be5",
"assets/assets/images/codolio.png": "f32044ccc71bca7db25f6eb00904ad6d",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/cursor.png": "dfee859ae855037cb8494e807a21f24a",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/images/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/images/github.png": "3d4c7482f267f5accbb7461766f3f790",
"assets/assets/images/google-play.png": "fb3f50af5e98fa60446b185970137a12",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/lamp.png": "ccda0abd490e08f4c880344ec8e80430",
"assets/assets/images/landing_image1.jpg": "d83707372407f4d0af2adca85199a533",
"assets/assets/images/landing_image2.jpg": "ca381ac51467399920d7ed5f13667e66",
"assets/assets/images/landing_image3.jpg": "f25ccf5fb1a4503c799344c5dafbc002",
"assets/assets/images/linkedIn.png": "f0ca7059014ff6cb339b985328b0de75",
"assets/assets/images/logo.png": "d7ba27b7c2ab2d5022aaadd6fc490f29",
"assets/assets/images/mannat.jpg": "8f46d0bb47692dbae5684a810ea68fa2",
"assets/assets/images/night.png": "06e78d9b2daa2690a909d7c5631fe0d9",
"assets/assets/images/piyush.jpg": "8e80526c785548a72d6ff40d18421b62",
"assets/assets/images/qrcode_app_image.jpg": "b5a50b02b48902aca9740cddce836c0c",
"assets/assets/images/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/images/recent_work_bg.png": "eabbef4d7296a44c58b7b8abd1bd95c6",
"assets/assets/images/safari_retreats_image.png": "ff051e85041efa8bc276060357d07572",
"assets/assets/images/sign.png": "ae4c3d0d83fb1219b1b7e4cf01e08508",
"assets/assets/images/sign_white.png": "504201d4981dcf1bfcccf678c2b93086",
"assets/assets/images/stacked-circles.png": "f2befd0509a54bf18100337c0a094235",
"assets/assets/images/StockCake-Elegant%2520Wavy%2520Pattern_1720961147.jpg": "623fc072b0898a1747f4dec376528877",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/walnutHealth.png": "b6adea3adb35b99136ee82e78232f896",
"assets/assets/images/whats_app.png": "a59e768eebc730446e35f676487b8815",
"assets/assets/images/while.png": "296684442ff07b920cfe107447ffc833",
"assets/assets/images/work1.png": "058b9b8236c106cfad1f50a73c5d6421",
"assets/assets/images/work2.png": "f08fe87cda5bcd2687e79558699bc037",
"assets/assets/images/work3.png": "f4e4c13c53d7c347074b09e62c886e56",
"assets/assets/images/work4.png": "50d95ed99aa27a5e3238c1e8c1a688b2",
"assets/assets/images/yui.png": "3cf727247752b730a05f51fe0177036f",
"assets/FontManifest.json": "83c3d7625dc91665dfaaf2a5682a21da",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "4d303f7f0492b2d34dc786bdd0a840f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "721465fa097b1f937e4756312690de1e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "88951adf2200e2a54b09d0922db2c049",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "36f55d012824e5ce769c5a055535761b",
"/": "36f55d012824e5ce769c5a055535761b",
"main.dart.js": "ecfbdb7aff1be129736fa80532e1be34",
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
