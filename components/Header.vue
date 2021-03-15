<template>
  <div class="w-full" v-bind:class="{ 'h-screen': reduce }">
    <header
      id="header"
      class="header w-full bg-primary border-b-4 border-secondary top-0 shadow-lg flex items-center justify-center xl:items-end xl:justify-start xl:px-4"
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
          src="~/assets/images/logo-sword.png"
          alt="Logo Manen"
          class="block w-auto h-16 lg:h-24 xl:h-32"
        />
      </nuxt-link>

      <navbar class="hidden xl:block font-playfair uppercase text-center text-xl ml-auto" />
      <navbar-mobile class="block xl:hidden font-playfair uppercase text-center text-xl ml-auto" />
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
</style>