<template>
  <div class="w-full" v-bind:class="{ 'h-screen': reduce }">
    <header
      id="header"
      class="header z-10 w-full bg-primary border-b-4 border-secondary top-0 px-4 shadow-lg flex items-center justify-center xl:items-end xl:justify-start xl:px-4"
      :class="{
        'h-screen': reduce && !isReduced,
        'fixed': reduce && isReduced,
      }"
    >
      <nuxt-link
        to="/"
        title="Accueil"
        class="logo"
      >
        <img
          id="header-logo"
          src="~/assets/images/logo-sword.png"
          alt="Logo Manen"
          width="800" height="212"
          class="block w-auto h-16 lg:h-24 xl:h-32"
        />
      </nuxt-link>

      <navbar class="hidden xl:block font-playfair uppercase text-center text-xl"/>
      <navbar-mobile class="block xl:hidden font-playfair uppercase text-center text-xl ml-auto"/>

      <span class="social-links absolute top-0 right-0  m-4 hidden text-3xl text-white">
        <SocialLinks/>
      </span>

    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reduce: false,
      isReduced: false,
    };
  },
  methods: {
    handleScroll() {
      if (this.reduce) {
        this.isReduced = window.scrollY > window.innerHeight;
      }
    },
    isHome() {
      return this.$nuxt.$route.path === "/";
    },
    animate() {
      this.$gsap.fromTo('#header-logo', {
        opacity: 0,
        y: '-100%'
      }, {
        opacity: 1,
        y: 0,
        duration: 1
      })
      // navbar links can be found in Navbar component
      if (document.getElementById('navbar-desktop')) {
        this.$gsap.fromTo('.navbar-link, .header-dragon', {
          opacity: 0,
          x: '200px'
        }, {
          opacity: 1,
          x: 0,
          stagger: 0.1
        })
      }
    }
  },
  mounted() {
    if (!this.isReduced) {
      this.animate()
    }
    // handle scroll event
    window.addEventListener("scroll", this.handleScroll);
    // trigger once on load
    if (this.isHome()) {
      this.reduce = true;
      this.handleScroll();
    }
  },
  watch: {
    $route() {
      this.reduce = this.isHome();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
/* home page header */
.header.h-screen {
  @apply flex-col items-center justify-end px-0;
}

.header.h-screen .logo {
  @apply w-full my-auto md:w-auto;
}

.header.h-screen .logo img {
  @apply w-full md:w-2/3 h-auto mx-auto;
}

.header.h-screen .social-links {
  @apply block;
}
</style>
