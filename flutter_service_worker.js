'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "695235b727a07b26ad589183ea23dd21",
"assets/AssetManifest.bin.json": "02551ad808b7163196226753572e98c6",
"assets/AssetManifest.json": "b817b65d850dfb658d8036f55bc44942",
"assets/assets/images/bg_home.png": "08354741c00c6a1771e9d67579e50390",
"assets/assets/images/bg_home@2x.png": "df7f90b5853bc2a35f5731bfa129940b",
"assets/assets/images/bg_home@3x.png": "72478ddc3b4173971549b5ab36952ac6",
"assets/assets/images/bg_mine_vip_card.png": "7635f4c5b9648bcdef72deba4caaa3cb",
"assets/assets/images/bg_mine_vip_card@2x.png": "21a79c9ac4cd5ec13251cc6dafbdb85f",
"assets/assets/images/bg_mine_vip_card@3x.png": "2c8ce757d64013c72edbe8f55b0e7b40",
"assets/assets/images/bg_perks_ad_task.png": "3b92012eb85b2db17e42cca677263d27",
"assets/assets/images/bg_perks_ad_task@2x.png": "d3d1040ae6d038eec34d2f7faa58cb20",
"assets/assets/images/bg_perks_ad_task@3x.png": "def715dee2ff4ee94ad28444d0416e26",
"assets/assets/images/bg_perks_award_title.png": "948f9f08788a5830a4696128a7ed426a",
"assets/assets/images/bg_perks_award_title@2x.png": "a4b1774020277bd0aaf6f04ab604794d",
"assets/assets/images/bg_perks_award_title@3x.png": "e3fa3605b70f393ca674cd8c90ca51ba",
"assets/assets/images/bg_perks_top.png": "5432e2b1217a200c2653c2119c0fb452",
"assets/assets/images/bg_perks_top@2x.png": "b3fbb0160816fb8312799ea712e4c0b6",
"assets/assets/images/bg_perks_top@3x.png": "8e2d51ddbf8c1434903afe2889667f68",
"assets/assets/images/bg_sign_award.png": "14cf6bd9b63873651eb6ff75149bcba6",
"assets/assets/images/bg_subscribe_month.png": "c73d18bc675535f8e146d19dfa32fe2a",
"assets/assets/images/bg_subscribe_week.png": "a826ca3a01a122fb24e40e9b6e4289d6",
"assets/assets/images/bg_subscribe_year.png": "c7d2b9dae89ecc0756cb1e146b65be06",
"assets/assets/images/ic_ad_arrow_middle.jpg": "3f62c2bc530423a334eb6364621f17a1",
"assets/assets/images/ic_ad_award_1.png": "3f18907122c4822d5a4b894d9a73334b",
"assets/assets/images/ic_ad_award_2.png": "71924b7998891095198e01b4be5175fe",
"assets/assets/images/ic_ad_gold.jpg": "a973a19f0b2fe81c90706c323314a923",
"assets/assets/images/ic_ad_logo.svg": "15fd9cb09c6dbeda4c63d1a4fde0999e",
"assets/assets/images/ic_arrow_right.svg": "130d78666fe4a0e86a3fc8d3c514100f",
"assets/assets/images/ic_checkbox_active.svg": "660eadc3df96fbfda93b55f856bb4104",
"assets/assets/images/ic_checkbox_double_circle_active.png": "8d197aa64908c3b2625d1a4f2c5b4bcc",
"assets/assets/images/ic_checkbox_double_circle_normal.png": "8d965a6b7d7e08754b72d4545c4c8c1b",
"assets/assets/images/ic_checkbox_normal.svg": "f63d8e5ef334c55e4ead7cb8f83186e0",
"assets/assets/images/ic_circle_cancel.svg": "bf0531a6d7a2867871499914c3221c9e",
"assets/assets/images/ic_connect_service_email.png": "e4566b57f92289d040ff0e1667da3c00",
"assets/assets/images/ic_drama_tv_state_active.svg": "c6fbdeb0f840ba280bc76350c6b9544e",
"assets/assets/images/ic_drama_tv_state_normal.svg": "e68382748135f0fc7b56291c1d21ca23",
"assets/assets/images/ic_dustbin.svg": "db7d9f3b7aabc01cbf6c0d73d892880e",
"assets/assets/images/ic_edit_white.png": "10dd89c9314decdb42e89f98708d9c35",
"assets/assets/images/ic_episode_lock.svg": "ac3cb8fdd70a22ec2fef8fe551b43f6a",
"assets/assets/images/ic_film.png": "bdaa3ab342f9429b3cb8ee7cb687225c",
"assets/assets/images/ic_gold.png": "c15c313de74069292753bc34dc5b0ab1",
"assets/assets/images/ic_home_vip.png": "9f63b6c7f33767535b5cbbb22c40aa63",
"assets/assets/images/ic_hot_fire.png": "1be3a83088b75118d2e2c36d15f1316a",
"assets/assets/images/ic_hot_play.png": "f461cc8ec28b08d953530a97cc3a4a07",
"assets/assets/images/ic_hot_search.png": "61dbbe0dbb6b6ed604a1266c17ff73c5",
"assets/assets/images/ic_input_clear.svg": "7fcdac9a320d5c309a68c0951d2ce0d4",
"assets/assets/images/ic_login_apple.png": "b9e8ba903fce72b5bf840c223a89b791",
"assets/assets/images/ic_login_facebook.png": "4b200a55c590eb7ca32d600996935f66",
"assets/assets/images/ic_login_google.png": "6f25fe1d737ada8ff7df1a5ba0c964c8",
"assets/assets/images/ic_mine_gift.svg": "8b0a455f8584d62dcc5486f03b779da4",
"assets/assets/images/ic_mine_play_history.svg": "4381c3ca693760341243fd566b478c0b",
"assets/assets/images/ic_mine_rights1.png": "055d2569bdc05976287b7922015091fb",
"assets/assets/images/ic_mine_rights2.png": "f639b1d09412b529c94f77e1fc0d5e61",
"assets/assets/images/ic_mine_rights3.png": "c4a823d0f71e35860c751f9d65fe6718",
"assets/assets/images/ic_mine_rights4.png": "d1d48d59e4139ea2fb54f542f0edadfa",
"assets/assets/images/ic_mine_service.svg": "350ab441203e78258f3a9a6c1fceee93",
"assets/assets/images/ic_mine_setting.svg": "43005d8b04f70c30c1dc2f38b855e0c7",
"assets/assets/images/ic_mine_translation.svg": "01c3080b97597447c961a2728030fdc5",
"assets/assets/images/ic_mine_vip.png": "52ceca5feb427077d7c1920eebab3811",
"assets/assets/images/ic_mine_wallet.svg": "f3ac553a665eef9f8ad590016302d98e",
"assets/assets/images/ic_perks_email.png": "134d0993488ff49a1519db587fdad8b5",
"assets/assets/images/ic_perks_fackbook.png": "1fddc527b2b1fd4c2c5303ee3de30f2c",
"assets/assets/images/ic_perks_tiktok.png": "645aa5aeb2f7cb368000b4bfefb98830",
"assets/assets/images/ic_perks_you_to_be.png": "c79b3b2ab808ca5e1cdd20a1ed0aa414",
"assets/assets/images/ic_rank_badge_1.png": "07fb1bf9842e5987a4ff4bcb6f60e599",
"assets/assets/images/ic_rank_badge_2.png": "f945b2b9c5177b3367c4ef0365d632d2",
"assets/assets/images/ic_rank_badge_3.png": "ce142fb2d49b4045bb77ddd3d2c4dad4",
"assets/assets/images/ic_rank_badge_4.png": "27773441bc8cbd05bef21f909dd7ce25",
"assets/assets/images/ic_search.svg": "eee47c40a450ba10dfe8fa85bd050e77",
"assets/assets/images/ic_sign_calendar.png": "f84f538ebfaa80518a26137419e9d660",
"assets/assets/images/ic_tab_binge_watch_select.svg": "055076cbad38a9667b60ecf6e6261cba",
"assets/assets/images/ic_tab_binge_watch_unselect.svg": "3a02d834c7b39293b9c1bed4da6aca60",
"assets/assets/images/ic_tab_for_you_select.svg": "826ca4096511820c16103d759ec3ae75",
"assets/assets/images/ic_tab_for_you_unselect.svg": "a3ca5012e5d119aedb95cfef4c72a557",
"assets/assets/images/ic_tab_gift.png": "9ea558bfb3d401b3bdced768424dbc21",
"assets/assets/images/ic_tab_home_select.svg": "5ff244b6b826dbaf18af814b72716cca",
"assets/assets/images/ic_tab_home_unselect.svg": "5b61af517d84a78b53046e9534c924bc",
"assets/assets/images/ic_tab_mine_select.svg": "5e2e75f43ebda7558f0661b5addcbfae",
"assets/assets/images/ic_tab_mine_unselect.svg": "645a6c14a5f54227a0e414653e401c47",
"assets/assets/images/ic_video_gift.png": "c0bdc9d8d9a4722c2418c1b212eabc1c",
"assets/assets/images/ic_video_love_active.png": "36530f44b09e55abb86e2cef32a007d8",
"assets/assets/images/ic_video_love_normal.png": "99f7200c0c93017a9b642ac1ce5b27e1",
"assets/assets/images/ic_video_pause.svg": "a4fd0d1efeac62cc947a67787693e1bc",
"assets/assets/images/ic_video_resolution.png": "d83159afe80bc61ad4dfb0a74cbb5dc3",
"assets/assets/images/ic_video_series.png": "22a4ee6403a350f67f38daa12482fa0a",
"assets/assets/images/ic_video_speed.png": "3471e537b032ee93c804529c4a036dfc",
"assets/assets/images/ic_video_tv.png": "0f248f32f1a9a217679795cd05e284c6",
"assets/assets/images/ic_watch_history_tv_normal.svg": "4441361121b4b820b7b3e52fb4ec9068",
"assets/assets/images/ic_watch_history_tv_normal_white.svg": "1b65c00e7eb131c68176075e870e6e58",
"assets/assets/images/img_empty_data.png": "f33c6b83571af8d98f4720a42474231d",
"assets/assets/images/img_load_fail.png": "987cbc2890914cc0945a2c92f9e77486",
"assets/assets/images/img_search_empty.png": "4d27a79e324cbb3033ba3f287cdbb7f0",
"assets/assets/images/img_sign_award_bg.png": "4e236cc92f6d668ab95d29325e4a248e",
"assets/assets/json/audio_wave.json": "38d29484ac15cccedad4e9ed2c75a26e",
"assets/assets/json/look_all_button.json": "c51b0ec3f55c60dc168c0b2617ecda3c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ec49cfacd96cacd5cdd0ec899abd25e1",
"assets/NOTICES": "d53accd4fe539ac2e53bda0dfa015e4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2694fa52cbbeee5883e5dfa9a6990f01",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "e9288f297d2a370353f8e5e4240b2b5e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "be09f19904a1cea8c2f0f108168332d2",
"/": "be09f19904a1cea8c2f0f108168332d2",
"main.dart.js": "9d6aefa785d560340220980a295e5948",
"manifest.json": "d2ddb7a2e0e1616030b0c4449103f54f",
"version.json": "c0566e087dda42bdec3ce4f6e13c6b64"};
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
