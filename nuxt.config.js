export default {
  target: 'static',

  publicRuntimeConfig: {
    contactEmail: 'manengroupe@gmail.com',
    siteTitle: 'Manen',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Site du groupe Manen',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Le groupe Månen est constitué de deux frères à la composition et d\'un ami à l\'écriture. Månen existe depuis une dizaine d\'années, ils se produisent sur de petites scènes en région parisienne.'
      },
      { hid: 'og:title', name: 'og:title', content: 'Manen' },{ hid: 'og:image', name: 'og:image', content: process.env.BASE_URL + '/images/logo-sword-1200.jpg'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'Manen' },
      { hid: 'og:description', name: 'og:description', content: 'Le groupe Månen existe depuis une dizaine d\'années et se produisent sur de petites scènes en région parisienne.' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Le groupe Månen existe depuis une dizaine d\'années et se produisent sur de petites scènes en région parisienne.' },
      { hid: 'og:image', name: 'og:image', content: '/images/logo-sword-1200.jpg'},
      { hid: 'twitter:image', name: 'og:image', content: '/images/logo-sword-1200.jpg'},
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "1200" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
