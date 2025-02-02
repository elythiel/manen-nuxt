export default {
  target: 'static',

  publicRuntimeConfig: {
    contactEmail: 'manengroupe@gmail.com',
    siteTitle: 'Manen',
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Site du groupe Manen',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Le groupe de musique Månen existe depuis une dizaine d\'années et se produit sur de petites scènes en région parisienne. Månen est constitué de deux frères à la composition et d\'un ami à l\'écriture.'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-16.png', size: '16x16' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32.png', size: '32x32' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-96.png', size: '96x96' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-128.png', size: '128x128' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-material-icons', mode: 'client' },
    { src: '~/plugins/vue-masonry', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    'portal-vue/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Nuxt Content values
  content: {
    liveEdit: false
  },

  // GSAP configuration
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },

  // GSAP Global page transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },
}
