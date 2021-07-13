// import router from "./router.js";

export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-demo",
    htmlAttrs: {
      lang: "zh-TW"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      }
    ]
    // script: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/main.scss"],

  loading: {
    color: "#40659b",
    height: "5px",
    duration: 5000
  },
  transition: {
    name: "out-in",
    mode: "out-in"
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/datepicker.js", mode: "client" },
    { src: "~/plugins/gsap.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      imgUrl: { limit: 100000 }
    },
    postcss: {
      preset: {
        autoprefixer: {
          overrideBrowserslist: ["last 2 versions"]
        }
      }
    }
  }
  // router: {
  //   mode: "history", //這段可以不用寫
  //   extendRoutes(routes, resolve) {
  //     return router;
  //   }
  // }
};
