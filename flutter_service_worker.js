'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "627f82b190fab3b7a537e879e95eb81e",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "c1c5f29031926111ab3ccb7c551c88f9",
"/": "c1c5f29031926111ab3ccb7c551c88f9",
"main.dart.js": "142ff216ad6b1bbcff5c546927e19952",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "721465fa097b1f937e4756312690de1e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "92d5d5344278e71d25069689240afb0b",
"assets/NOTICES": "4a156936d38b5eaacadede8fa904d3b6",
"assets/FontManifest.json": "83c3d7625dc91665dfaaf2a5682a21da",
"assets/AssetManifest.bin.json": "4a5b98ea64abaa57b85f9fd48e7dec7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "246b5522686ac2501deda380ee239e3e",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/email.png": "0583ba9496da3d94af09d31e16f881f5",
"assets/assets/images/stacked-circles.png": "f2befd0509a54bf18100337c0a094235",
"assets/assets/images/cursor.png": "3caf09ec7bbf6ebbc1884791f3d1ff0a",
"assets/assets/images/work62.png": "6fa8de400c1a4b28bf1df680afd49b58",
"assets/assets/images/arrowhead-up.png": "1ea3dc170d4f90fd9bac0b905ab425ce",
"assets/assets/images/app.png": "2097592043bf6f86152a38634ceab747",
"assets/assets/images/desktop.png": "ad7ddd5dbc79fa0a7d6d033c37ddb806",
"assets/assets/images/download.png": "2d060656c52190ea70e1369d070a7df6",
"assets/assets/images/yui.png": "b7eccff75e4b59ac0369d1fcc73af0c5",
"assets/assets/images/flutter.png": "c17a21f0dda5a09b4bb6c53b2282df65",
"assets/assets/images/harish.jpg": "ae32bb6bbe6aed5f6fcdeac1653fd241",
"assets/assets/images/aman.jpeg": "98c660241c89d753f9ce9315a9c31eaa",
"assets/assets/images/work5.png": "fc54aed5b7a1ff8cd1728bf265b75b72",
"assets/assets/images/recent_work_bg.png": "786558e55743bf2de6cf8a90301191c5",
"assets/assets/images/mannat.jpg": "85766187439d90bb3fb51b9c52fc9f57",
"assets/assets/images/google-play.png": "c2f7cb5d825facf8539eb2148f728f21",
"assets/assets/images/work4.png": "fae92abff912ee3471b8fbb4c38a4561",
"assets/assets/images/work6.png": "8446b77f407cd22e143a066316464cc0",
"assets/assets/images/graphic.png": "36a92cf63221f1dd5f7ffee8a2949182",
"assets/assets/images/raunak.jpeg": "35b1f17e33c0b4a9251ea01583838277",
"assets/assets/images/github.png": "debe7d123136dc24c8424dc950f94ca9",
"assets/assets/images/whats_app.png": "031110a4836eb303b0ca5ab048c21566",
"assets/assets/images/StockCake-Elegant%2520Wavy%2520Pattern_1720961147.jpg": "623fc072b0898a1747f4dec376528877",
"assets/assets/images/saiTeja.jpg": "d48a57656c737038b4dc3f8a2050df75",
"assets/assets/images/work3.png": "dca65bdd4339eaa5d90c5162cdf1e26d",
"assets/assets/images/android.png": "43b3444519d5f09c1807642ab00f7858",
"assets/assets/images/Hover_flip.png": "df97236aab3ec332d72669a82b374385",
"assets/assets/images/work2.png": "7f92e51c21d191664ff4b2e18326368d",
"assets/assets/images/rapid.png": "3744a57bb225d93059bc7c3f055109bb",
"assets/assets/images/sign.png": "3e46bba147660f938aebd42ff3c3ea25",
"assets/assets/images/hand.png": "4fda2189f83f90fb67f1d6bca807c013",
"assets/assets/images/Vmake-1728826426.png": "26cf3be12c2e3b7636e10c4fd1782c2b",
"assets/assets/images/work1.png": "3dd5d92ecd8c6434ef1070aecdb5a9bd",
"assets/assets/images/contact_icon.png": "332a94f5463bdc9dd03f1edbf466ae9b",
"assets/assets/images/codolio.png": "1a817511e5064d5b7935a3c94d23787a",
"assets/assets/images/fiverr.png": "b09388ddb27c59ec784e16a4fb0b492d",
"assets/assets/images/Intreaction_design.png": "104ddac74cb693f00ba3cac288957483",
"assets/assets/images/likeminds.jpeg": "81537b790d8852988b1a2c0f3edf24d7",
"assets/assets/images/logo.png": "0593849dafe54e9ab90616c94fbc4b7b",
"assets/assets/images/blog.png": "cc7380c398e6ea45bff2a56a4d17f3d9",
"assets/assets/images/safari_retreats_image.png": "b28cf2b2b3922890d6394ed67e117066",
"assets/assets/images/linkedIn.png": "f6aea02515bb123f0760dff656f90898",
"assets/assets/images/sign_white.png": "e120a7e5550f851af908e95f52539ef8",
"assets/assets/images/qrcode_app_image.jpg": "00775b11cf658369eb2b5b28dd3a2ad0",
"assets/assets/images/bg_img_2.png": "05f9366b25efab54ebdc4a8a3f840647",
"assets/assets/images/Hover.png": "69d6ec3d7c1be11ffe53d0229bb3a6ee",
"assets/assets/images/landing_image2.jpg": "99ee37e20fba1249b834ad2ed289c8d0",
"assets/assets/images/landing_image3.jpg": "f2be4888063033db0c0cc19a809fda96",
"assets/assets/images/while.png": "8242c2be959ad87749663851bd113a80",
"assets/assets/images/ui.png": "bd174b5760899a0e8328bf3140fbb01c",
"assets/assets/images/hi.gif": "a8a03e12ce08a2d350e56855c86ba08b",
"assets/assets/images/landing_image1.jpg": "569a92e10d9fee5263ef2e32a233518a",
"assets/assets/images/akshat.jpeg": "c4d96fe8dda36402397ba37879ff58d4",
"assets/assets/images/walnutHealth.png": "0175fa9fe86394d57b60578251a40938",
"assets/assets/images/speaker.png": "e7dea911564be95c6dde65abbaf98c3a",
"assets/assets/images/night.png": "10c76f05a94233767ecffbc692375fa2",
"assets/assets/images/cipherSchools.png": "a15c26a1c53bfd92bafbf48163bc89e1",
"assets/assets/images/lamp.png": "82ce89808abc7c779aacff48af723e56",
"assets/assets/images/piyush.jpg": "f108fac389b2c179f32d1f602a7f8650",
"assets/assets/images/alok.jpg": "402fa319a13e5ff5aad5bcfedabdf75c",
"assets/assets/fonts/HelveticaNowDisplay-ExtraBold.ttf": "d62cd5734d3a8ec9c487fa9aafcd9c68",
"assets/assets/fonts/HelveticaNowDisplay-Regular.ttf": "9632144b89660f0f032a3a0a01e533c7",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/HelveticaNowDisplay-Medium.ttf": "53b5d05abde1c9192de6f6a954a5fef9",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
