if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        i[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const i = document.createElement("script");
              (i.src = e), document.head.appendChild(i), (i.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!i[e]) throw new Error(`Module ${e} didn’t register its module`);
          return i[e];
        })
      );
    },
    s = (s, i) => {
      Promise.all(s.map(e)).then((e) => i(1 === e.length ? e[0] : e));
    },
    i = { require: Promise.resolve(s) };
  self.define = (s, n, r) => {
    i[s] ||
      (i[s] = Promise.resolve().then(() => {
        let i = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          n.map((s) => {
            switch (s) {
              case "exports":
                return i;
              case "module":
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = r(...e);
          return i.default || (i.default = s), i;
        });
      }));
  };
}
define("./sw.js", ["./workbox-ea903bce"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/2fQWKlGIMDjezLWWir4g5/_buildManifest.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/2fQWKlGIMDjezLWWir4g5/_ssgManifest.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/1.2d20305653824f05159d.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/151.d85f2ac175406b581e86.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/153-7a3ce72e81df7e391d34.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/16.279cd873f70eda018bf6.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/22.cf18d4a4ffcf46c04466.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/226.8e51719b1512bb51a5d1.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/274.29cc1d9d9ea9a256ee63.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/287.7ff0871e7bfaa3215cd8.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/326-ad89bbb4f7557ed68023.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/371-cf93ffec5db6f34064b3.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/398.fe7e4bf3d1ed0abbd902.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/403.45ff1ab7345ca9a70d6c.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/563.fe21348254227615b67d.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/587.83bbdd2df73f87e823a9.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/59-8ba90e6dac19ae5b54b7.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/6008db0b-3b655fca74bc4793204f.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/601-340d3827aa5cd4cacd30.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/604.e8e2fb699fdebd796867.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/612.3c2fcadc8019a6a70b48.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/647.166a790c348b5965adf6.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/651-2bd596e14bd100e13a82.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/668.7a306fbed2845663e3bf.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/669.8b119e876560ab3b58e0.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/675-39642ce6e0af1b21805b.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/677-856360090ac3f3aedffb.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/696.7fff322d4c7d75beff3c.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/75fc9c18.5c1929f66343f0a636cd.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/765-280e14333236b0c3f639.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/812-f063187eb2b42314dc7e.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/859.81b1442f4072de7df262.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/998.f82b8ef23b7a8e2044e2.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/9f542e2b.3ba2761b92616a1d00d6.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/commons-f47f34e8780a163ae6ba.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/framework-c93ed74a065331c4bd75.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/main-8c8cd71c826a9652a935.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/_app-2dfcda0d6ce2f27f79a6.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/_error-a0e21b9b223f827fe1f2.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/chat-228910ca88017b9fb7a4.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/chat/%5Bid%5D-a3b80411e79992f831bd.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/index-4a48067a674a1d485c2d.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/shop-1dcaaf0318344568d74f.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/shop/checkout-9611029082cf2c76af90.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/shop/details-a754ab8e2b7f5e0da844.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/shop/orders-713e8b479d619f3db932.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/shop/payment-a04ddc667149a2205f1e.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/shop/thanks-eedecece75b3c517d9fc.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/pages/watch-549a6270e8165cad7092.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/chunks/webpack-3e3173b751591a6029ce.js",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        {
          url: "/_next/static/css/ed29359b5cb33ae76ad5.css",
          revision: "2fQWKlGIMDjezLWWir4g5",
        },
        { url: "/favicon.ico", revision: "21b739d43fcb9bbb83d8541fe4fe88fa" },
        {
          url: "/icon-192x192.png",
          revision: "381614edaa79f27f7bf71efad3b06a1a",
        },
        {
          url: "/icon-256x256.png",
          revision: "467a611cb7ea3b2a6574fae054816f67",
        },
        {
          url: "/icon-384x384.png",
          revision: "5a241e123a51a8fd6e066c81530d9067",
        },
        {
          url: "/icon-512x512.png",
          revision: "9f8df960751f269a06fbbdabd1249f90",
        },
        { url: "/icon.png", revision: "9f8df960751f269a06fbbdabd1249f90" },
        { url: "/manifest.json", revision: "2cef9fccfd67350831c239d02bedd89c" },
        { url: "/nothing.svg", revision: "8995a75e99b4ce84c1f6d1545a6b3940" },
        { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: i,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-media-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
