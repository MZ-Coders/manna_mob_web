'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8bc06e359c2cf8be6aeac5446f160fa6",
"version.json": "72ad31436127869b4e30d934215f76ef",
"index.html": "9f10543833a538fbebb5297f33498a09",
"/": "9f10543833a538fbebb5297f33498a09",
"main.dart.js": "2bd83e8d623d2e4df9f0ad515a6d6953",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f2dab8d1c3db9b50042df51fcc28778f",
".git/config": "1c625ae3f88bc833682ba9590be095b0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"assets/AssetManifest.json": "60fc3e671c2410530eb8eca0375d5009",
"assets/NOTICES": "3e042a356463ce065f184ddaa11f63c7",
"assets/FontManifest.json": "eb38a8cb5d0f0c5acfbb632278ac6630",
"assets/AssetManifest.bin.json": "d2ed9d966a8b25f758dd43c90dffa512",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "02ad5ea037d7f6ba7a8c6f62ec08c1d7",
"assets/fonts/MaterialIcons-Regular.otf": "8c857bd60a8992da7e5d831f2b26ec22",
"assets/assets/recipes.json": "90ae65753bbd3f774017775ba064b7d3",
"assets/assets/images/spaghetti.png": "f3b0f84e872e3afd319cca935e180e21",
"assets/assets/images/Pdf_Succinctly.jpg": "c1fcd3c589ea855adc1fc8c4ae06706b",
"assets/assets/images/profile_image.png": "14b897f4bc1ce0436880f1c66b1545b8",
"assets/assets/images/cookies.png": "f5c76dd1faafc1c1dae9940492f438bf",
"assets/assets/images/tacos.png": "62d78bada27f6a1b696a29617ab61764",
"assets/assets/images/chicken.png": "cb25f0db2f29815846af8ff114a5429f",
"assets/assets/images/home_screen.png": "7a4ff1a8bf7f0248922ecc45e9d04a1f",
"assets/assets/images/recipe_details.png": "9b236d34ba7d5af3bf70bbfe8f7d037a",
"assets/assets/images/onboarding.png": "af95e15eee963c64733202102c9c95a0",
"assets/assets/images/alfredo.png": "b44d867c75e4047df43b32a96f1c3b39",
"assets/assets/images/rice.png": "d79c213251c6cb1f1a8ada9031945131",
"assets/assets/images/salad.png": "28ea4e1be57064b285493e4ce5d07716",
"assets/assets/images/pizza.png": "92c2cce9f9f9d27ec378d6378fdf63d6",
"assets/assets/images/dish.png": "296323073a756895a4ff6bdff561c0e7",
"assets/assets/images/leaves.png": "2220f19f27d476cce335ab3c852a1ea1",
"assets/assets/images/black_pepper.png": "f1b96ccb5d25066a1db7f5413a971af5",
"assets/assets/images/burger.png": "69f6c52c3b897839408dad494c0d7a23",
"assets/assets/img/shopping_cart.png": "71f26b74b0c34dc1deb2a08480f65a64",
"assets/assets/img/manna_desserts.png": "9321d9bf0c27220c4de0fd539a3ac733",
"assets/assets/img/manna_pequeno_almoco.png": "038c405916794ffedcfdaa3874622e58",
"assets/assets/img/m_res_1.png": "577a99877c7e061fd95176bbc5a0e356",
"assets/assets/img/add.png": "30050b9e7d1342d3e70710a01c90276e",
"assets/assets/img/manna_entradas.png": "aaff33a0d639ee34a280b8ff9a06c5e4",
"assets/assets/img/check.png": "8eedeb57cb76dd63a10eaef427bc2c16",
"assets/assets/img/aves.png": "fc7513ed8d25ea753a3348254f9a6bbe",
"assets/assets/img/m_res_2.png": "547a4c88194630bef0961063f51e0c30",
"assets/assets/img/chamussas.jpg": "064739d823b76717ec226cd3812ed4f1",
"assets/assets/img/aves_1.png": "58eae8b6b2ed912d962b00fc931fdcc6",
"assets/assets/img/more_payment.png": "a7ee42cfee46384d3c753fa68e98d288",
"assets/assets/img/more_info.png": "4e0179efe80f77cb061e2702390561d6",
"assets/assets/img/menu_4.png": "0c4d6d79e88aed0ad4f11fab0bc3a63c",
"assets/assets/img/fish_2.png": "d5759358316784d996af1b4ae2385ad5",
"assets/assets/img/manna_verdura.png": "caf3c5c0ae1296e3d9bdabcc72932777",
"assets/assets/img/menu_1.png": "34ffb6b9bd0c4d16eabe91d0b0abb4c3",
"assets/assets/img/verdura.png": "b8b75398752d37650d1f17c4d95173be",
"assets/assets/img/thank_you.png": "b018b944e96392262f17b7de65fe53b2",
"assets/assets/img/facebook_logo.png": "38202a021ac69951688cb61c6b669cc1",
"assets/assets/img/tab_profile.png": "f81546c894288017a0a79c06a8e4ed04",
"assets/assets/img/menu_3.png": "d3f186bd5704103fc7ca8db74cd9a687",
"assets/assets/img/welcome_top_shape.png": "323eabf09549f7f8f04f109ae77db2c2",
"assets/assets/img/menu_2.png": "e456f6b030f23adf92540cf5b5bd6161",
"assets/assets/img/dess_2.png": "b04ccd4c4b1f6f829ca9c0402d622893",
"assets/assets/img/res_2.png": "63f68446fd98243c3a934ed8a41cbc65",
"assets/assets/img/res_3.png": "a57cbc69f3c548617c46f2b4bc2e2539",
"assets/assets/img/manna_icon.png": "33a319733cc716f3b2f7ae857bb80914",
"assets/assets/img/doses.png": "44a0e87259f9c5c02740f3c5554d3e91",
"assets/assets/img/dess_3.png": "fcccfb2f6c4186b6392e2f79deb4c271",
"assets/assets/img/more_notification.png": "84a4acaf149d46beb62fc6c4b210c02a",
"assets/assets/img/manna_doses.png": "e138e81528e8ebb4d8f52721de662f73",
"assets/assets/img/manna_aves.png": "290bdd34221593fad3f642f5e0f6deb2",
"assets/assets/img/location-pin.png": "edde02cc535c74f423497db7368316b2",
"assets/assets/img/dess_1.png": "6c9fd66c24b49517006e85c2429c0d31",
"assets/assets/img/res_1.png": "5c92c9da4a47b5435b96c4786b5daafd",
"assets/assets/img/manna_drink.png": "535ad1602ebfb3c0d1dba98bdfabbbf9",
"assets/assets/img/dess_4.png": "0778beeb511bc88206308cbc15317c1f",
"assets/assets/img/tab_home.png": "13017c54f3129efff3e1e78a57061ffa",
"assets/assets/img/pequeno_1.png": "9a4bea286dd6ebd636c604b498a604f9",
"assets/assets/img/fish_02.png": "e20a45898e08b951135ab9b8d57502a8",
"assets/assets/img/cat_sri.png": "6598664ba1005d827e998bdedbe3fade",
"assets/assets/img/pequeno.png": "d87341090007513017d2bffa3a0184d0",
"assets/assets/img/desserts.png": "ff43171c097b99bddc8de0e3ac7e74f1",
"assets/assets/img/wine.png": "2927b53a8a1d71a9836fba6817f99f79",
"assets/assets/img/beef.png": "cd2ff4eabe705582432f243b12cea74d",
"assets/assets/img/search.png": "6c5c30445169b17a6145fe20433c9175",
"assets/assets/img/fav_icon.png": "9330377d64d94e291bb4e5343a385f46",
"assets/assets/img/salada_.jpg": "a2d2ae03f33f68c84ad9a2a7cc06f143",
"assets/assets/img/muelas.png": "0aab27ca2ddbb33435fe7db8c5276d61",
"assets/assets/img/favorites_btn_2.png": "18038c4ef8cef8aeff5dc345f2e8d850",
"assets/assets/img/favorites_btn.png": "b6cce0c82b80619b432f7baf08f5e2c7",
"assets/assets/img/more_inbox.png": "95abf30ae25ac6b0682b6d23ea71885f",
"assets/assets/img/tab_menu.png": "4341761a3a5ca774f1f0459cbdea8789",
"assets/assets/img/btn_next.png": "50dda2a8413e43d80bb202c7740dce0a",
"assets/assets/img/shop_logo.png": "35de96325fd6b36054a7cc6bde1cfa77",
"assets/assets/img/cat_3.png": "e5c987c0e53bda1971b337d175bc56a4",
"assets/assets/img/sopa_2.jpg": "1e052cd8d30a44e55d88a3ffc908931e",
"assets/assets/img/tab_offer.png": "90ff0160e579a241e3110bd2e64863a5",
"assets/assets/img/item_3.png": "7f7a72106b513e73c994173d06c730cf",
"assets/assets/img/rate.png": "e04aec629a857f3b0faf5e70f5b0f614",
"assets/assets/img/shopping_add.png": "a25c987e9914a2ec862085b8b5797b33",
"assets/assets/img/google_logo.png": "adf58f1117060bc2ee5f7e676b57e2e3",
"assets/assets/img/item_2.png": "87cb7a81906bff21669c7cc498708936",
"assets/assets/img/dropdown.png": "f0cd9937947a5be83d9e3690b6f9694c",
"assets/assets/img/cat_4.png": "2ed92530a6fce889e20da1f4896bc477",
"assets/assets/img/btn_back.png": "d5d051d62d275e26c5d8e9623a945bb7",
"assets/assets/img/item_1.png": "31016ec6d4c1e761aa1d477e8b3add7c",
"assets/assets/img/app_logo.png": "ca4a8e8ec1034ef42b835a37ccb58a54",
"assets/assets/img/cat_offer.png": "a8dad28639a23327a1764c8357577930",
"assets/assets/img/on_boarding_1.png": "7e1f178c56934a28428165016ee7a171",
"assets/assets/img/visa_icon.png": "b14f44ca7530d28165d68c62e25ac110",
"assets/assets/img/cash.png": "1f953031db18576610af7e8b09b4b361",
"assets/assets/img/more_my_order.png": "47aa32d5cdcfe6ad4dccdb1cbf571b17",
"assets/assets/img/map_pin.png": "6f2dde54c401296d3b836230b5b06eb5",
"assets/assets/img/on_boarding_2.png": "5ed08e841fd3a2cac39aeea92f23a51f",
"assets/assets/img/on_boarding_3.png": "60b14f09f936fdc6ca5f44c05b29252c",
"assets/assets/img/manna_carne.png": "16d6820b762d7b207c7bf8cf3b0a4f8e",
"assets/assets/img/manna_marisco.png": "e18524e4f29db674becfb444fc3ec620",
"assets/assets/img/tab_more.png": "acd25cfece38c9e1b42c57e6fa5b04e0",
"assets/assets/img/paypal.png": "b6d2295455327bf89aaa6105fa928db6",
"assets/assets/img/offer_3.png": "7b6576c4800f64e4107c2b199760c013",
"assets/assets/img/offer_2.png": "ba003aba46eb85c32843c1d47c4e0467",
"assets/assets/img/azeitonas.jpeg": "42ef830be7332ccc16a2ca3c19acb08a",
"assets/assets/img/splash_bg.png": "212076bd598ba266747bc232c72063a8",
"assets/assets/img/offer_1.png": "63f68446fd98243c3a934ed8a41cbc65",
"assets/assets/img/fish.jpg": "4e96a7e7df3deb49561c33e134c8c2c1",
"assets/assets/img/detail_top.png": "a1e39323a4493ab30a0daf60546ecac7",
"assets/assets/img/petiscos.jpg": "3cb5fc30935da73500a6dab62f5929ec",
"assets/assets/img/beef_2.png": "667445f5f18ddd1206b4f7ac71f1fb85",
"assets/assets/icons/icon-desserts.png": "46d9c0bbc9c6961d4fde68821fa5d133",
"assets/assets/icons/icon-burger.png": "cb6f0b63a661cb0b45c483a11c0b4ab8",
"assets/assets/icons/icon-drinks.png": "f12f2780595ba57fa1434ddcbb627e32",
"assets/assets/icons/icon-noodles.png": "02ddee28a5c01f83bab075015e48a15b",
"assets/assets/font/Metropolis-Bold.otf": "dea4998b081c6c1133a3b5b08ff2218c",
"assets/assets/font/Metropolis-ExtraBold.otf": "d7eaa8ab58ec03f16c8d08389711f553",
"assets/assets/font/Metropolis-Regular.otf": "f7b5e589f88206b4bd5cb1408c5362e6",
"assets/assets/font/Metropolis-Medium.otf": "f4bca87fd0d19e61c27dc96299c75f8c",
"assets/assets/font/Metropolis-SemiBold.otf": "2556a4f74e2c523893e6928d6e300f1c",
"assets/assets/items/REFRESCO_200ML_UVA.png.png": "9e5e9423b6be07ec9036520cca2a1443",
"assets/assets/items/coca_cola.webp": "b3482800487b9764aad641cc358b93e1",
"assets/assets/items/SORVETE-LUIGI-1.6L-MORANGO-COM-CHANTILLY.png": "dadf83ccc24565bebeb902438bd3bc37",
"assets/assets/items/8.png": "976db3d9db59ae6ee07ac5eb2498ce72",
"assets/assets/items/9.png": "774e60358d3479a686e9ed6ae41c8476",
"assets/assets/items/SORVETE-PALETITAS-POTE-500ML-COOKIES-TRU.png": "3c8ac80de7907cc81cacf7e4bcd6bfe5",
"assets/assets/items/12.png": "d7479f4162c17a1c36155bebe72895da",
"assets/assets/items/11.png": "5c3a3b0765b182966faf6c82f65e0f38",
"assets/assets/items/REFRESCO_200ML_LIMAO.png.png": "656283c3bddbafa17012307ee200a2cd",
"assets/assets/items/10.png": "a23c3289779589eaf6affdf6ed461137",
"assets/assets/items/coca_cola_lata.png": "ac7b741ba6c552a6ab7b0f7d671bd977",
"assets/assets/items/BEBIDA-LACTEA-PULSI-GARRAFA-11KG-MORANGO.png": "cc043b293b45eb416e8ec66a2dea3d3d",
"assets/assets/items/IOGURTE-NESTLE-GREGO-400G-FRUTAS-VERMELHAS.png": "96328fbb444b102f497c0d2920296d80",
"assets/assets/items/pepsi_lata.png": "6dc867e9cbb1c11ce57cec2ed46c4184",
"assets/assets/items/4.png": "ff7c308897b5735cbf70700e8767e981",
"assets/assets/items/5.png": "a0e2c09c24dac4972f9b9bdf52e8e3bc",
"assets/assets/items/7.png": "fbfc6691e85152afccdc1260bd0d507d",
"assets/assets/items/6.png": "20e6ca8c3583ea02da7478982dd55901",
"assets/assets/items/coca_2l.png": "d519b1cd8600d6eaf8583a012d59f1b9",
"assets/assets/items/2.png": "de1e202a53ec0e2fb89d1ea642b5860d",
"assets/assets/items/3.png": "7eaf615cc969ecec8976c69ec85df793",
"assets/assets/items/1.png": "a7991fc43be6e3c997636d5a988b857d",
"assets/assets/items/REFRESCO_200L_LARANJA.png.png": "4b1ec954efa6356d6e46fec3d7c12332",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
