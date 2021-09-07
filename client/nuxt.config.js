export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "My Nuxt App: Trying out nuxt!",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  components: {
    dirs: ["~/components", "~/components/header"]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/toast"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: "http://localhost:8000/",
    prefix: "http://localhost:8000/",
    proxy: true,
    credentials: true
  },

  proxy: {
    "/laravel": {
      target: "http://localhost:8000/",
      pathRewrite: { "^/laravel": "/" }
    }
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: "laravel/sanctum",
        url: "http://localhost:8000",
        endpoints: {
          login: {
            url: "/login"
          },
          logout: {
            url: "/logout"
          }
        }
      }
    }
  },

  toast: {
    duration: 3500,
    position: "bottom-right",
    keepOnHover: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
