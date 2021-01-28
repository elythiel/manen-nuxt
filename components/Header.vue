<template>
  <div class="w-full" v-bind:class="{ 'h-screen': reduce }">
    <header
      id="header"
      class="header"
      :class="{
        'h-screen': reduce && !isReduced,
        fixed: reduce && isReduced,
      }"
    >
      <nuxt-link to="/" title="Accueil" class="logo">
        <img src="~/assets/logo-sword.png" alt="Logo Manen" />
      </nuxt-link>

      <nav class="navbar">
        <nuxt-link to="/galery" title="Galerie">
          <img src="~/assets/nav-galery.png" alt="Logo galerie" />
          Galerie
        </nuxt-link>
        <nuxt-link to="/albums" title="Albums">
          <img src="~/assets/nav-album.png" alt="Logo albums" />
          Albums
        </nuxt-link>
        <nuxt-link to="/concerts" title="Concerts">
          <img src="~/assets/nav-concert.png" alt="Logo concerts" />
          Concerts
        </nuxt-link>
        <nuxt-link to="/" title="Contact">
          <img src="~/assets/nav-contact.png" alt="Logo contact" />
          Contact
        </nuxt-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
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
.header {
  @apply w-full bg-primary flex items-end border-b-4 border-secondary top-0 shadow-lg;
}
.header .logo img {
  @apply h-32 w-auto;
}
.header .navbar {
  @apply flex flex-row items-end justify-around text-white uppercase font-playfair text-center text-xl ml-auto;
}

.header .navbar a {
  @apply px-12;
}
.header .navbar a img {
  @apply block mx-auto h-16 w-auto;
}

/* navbar dragons */
.navbar::before,
.navbar::after {
  content: "";
  @apply w-24 h-28 block bg-no-repeat bg-contain;
}
.navbar::before {
  background-image: url("~assets/dragon-left.png");
}
.navbar::after {
  background-image: url("~assets/dragon-right.png");
}

/* home page header */
.header.h-screen {
  @apply flex-col items-center justify-end;
}
.header.h-screen .logo {
  @apply my-auto;
}
.header.h-screen .logo img {
  @apply w-2/3 h-auto mx-auto;
}
.header.h-screen .navbar {
  @apply text-3xl mx-12;
}
.header.h-screen .navbar a {
  @apply mb-4;
}
.header.h-screen .navbar a img {
  @apply h-32;
}
.header.h-screen .navbar::before,
.header.h-screen .navbar::after {
  @apply w-44 h-56;
}
</style>
