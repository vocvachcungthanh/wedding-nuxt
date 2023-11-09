export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Hữu Thành - Thủy Tiên",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "web đám cưới hữu thành thỷ tiên",
      },
      { name: "format-detection", content: "telephone=no" },

      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://huuthanh-thuytien.click",
      },
      {
        nam: "robots",
        content: "index,follow",
      },
      {
        name: "keywords",
        content:
          "Hữu thành, thủy tiên, ablum, câu chuyện tình yêu, huuthanh thuytien,",
      },
      {
        property: "og:image:type",
        content: "image/png",
      },
      {
        property: "og:image:width",
        content: "436",
      },
      {
        property: "og:image:height",
        content: "228",
      },

      {
        property: "og:image",
        content: "https://huuthanh-thuytien.click/3.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "ant-design-vue/dist/antd.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "@/plugins/antd-ui",
    },

    {
      src: "~/plugins/fontawesome.js",
    },

    {
      src: "~/plugins/InfiniteLoading.js",
      mode: "client",
    },
  ],

  loading: "~/components/LoadingBar.vue",

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    modern: false,
  },

  env: {
    baseURL: process.env.BASE_URL || "https://huuthanh-thuytien.click",
    baseApiUrl:
      process.env.BASE_API_URL ||
      "https://huuthanh-thuytien.click/wedding-api/api/",
    baseGoogleUc:
      process.env.BASE_GOOGLE_UC || "https://drive.google.com/uc?id=",
  },

  router: {
    middleware: "mobile",
  },

  server: {
    port: process.env.PORT || 3002,
  },
};
