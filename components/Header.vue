<template>
  <div class="w-full" v-bind:class="{ 'h-screen': reduce }">
    <header
      id="header"
      class="header w-full bg-primary border-b-4 border-secondary top-0 shadow-lg flex flex-col items-center md:flex-row md:items-end"
      :class="{
        'h-screen': reduce && !isReduced,
        fixed: reduce && isReduced,
      }"
    >
      <nuxt-link
        to="/"
        title="Accueil"
        class="logo w-2/3 px-4 md:w-auto md:px-4"
      >
        <img
          src="~/assets/images/logo-sword.png"
          alt="Logo Manen"
          class="block w-full h-auto md:h-32 md:w-auto"
        />
      </nuxt-link>

      <nav
        class="navbar text-white uppercase font-playfair text-center mr-12 md:space-x-12 text-xl bg-primary w-full flex flex-row flex-wrap justify-between md:w-auto md:items-center md:justify-around md:ml-auto md:flex-nowrap"
      >
        <img
          src="~/assets/images/dragon-left.png"
          class="dragon hidden h-28 w-auto md:block"
        />
        <nuxt-link to="/gallery" title="Galerie" class="p-2 md:py-0">
          <img
            src="~/assets/images/nav-gallery.png"
            alt="Logo galerie"
            class="mx-auto h-16 w-auto hidden md:block"
          />
          Galerie
        </nuxt-link>
        <nuxt-link to="/albums" title="Albums" class="p-2 md:py-0">
          <img
            src="~/assets/images/nav-albums.png"
            alt="Logo albums"
            class="mx-auto h-16 w-auto hidden md:block"
          />
          Albums
        </nuxt-link>
        <nuxt-link to="/concerts" title="Concerts" class="p-2 md:py-0">
          <img
            src="~/assets/images/nav-concerts.png"
            alt="Logo concerts"
            class="mx-auto h-16 w-auto hidden md:block"
          />
          Concerts
        </nuxt-link>
        <nuxt-link to="/" title="Contact" class="p-2 md:py-0">
          <img
            src="~/assets/images/nav-contact.png"
            alt="Logo contact"
            class="mx-auto h-16 w-auto hidden md:block"
          />
          Contact
        </nuxt-link>
        <img
          src="~/assets/images/dragon-right.png"
          class="dragon hidden h-28 w-auto md:block"
        />
      </nav>
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
      return this.$nuxt.$route.path == "/";
    },
  },
  watch: {
    $route() {
      this.reduce = this.isHome();
    },
  },
  created() {
    // handle scroll event
    window.addEventListener("scroll", this.handleScroll);
    // trigger once on load
    if (this.isHome()) {
      this.reduce = true;
      this.handleScroll();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
/* home page header */
.header.h-screen {
  @apply flex-col items-center justify-end;
}
.header.h-screen .logo {
  @apply w-full my-auto md:w-auto;
}
.header.h-screen .logo img {
  @apply w-full md:w-2/3 h-auto mx-auto;
}
.header.h-screen .navbar {
  @apply md:text-3xl md:mx-12 w-full;
}
.header.h-screen .navbar a {
  @apply md:mb-4;
}
.header.h-screen .navbar a img {
  @apply h-32;
}
.header.h-screen .navbar .dragon {
  @apply h-56;
}
</style>