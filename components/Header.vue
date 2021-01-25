<template>
  <div class="w-full" v-bind:class="{ 'h-screen': reduce }">
    <header
      id="header"
      class="header"
      v-bind:class="{
        'h-screen': reduce && !isReduced,
        fixed: fixed || isReduced,
      }"
    >
      <nuxt-link to="/" class="logo">
        <img src="~/assets/logo-sword.png" alt="Logo Manen" />
      </nuxt-link>

      <nav class="navbar">
        <nuxt-link to="/galery">
          <img src="~/assets/nav-galery.png" alt="Logo galerie" />
          Galerie
        </nuxt-link>
        <a href="/albums" title="Albums">
          <img src="~/assets/nav-album.png" alt="Logo albums" />
          Albums
        </a>
        <nuxt-link to="/concerts">
          <img src="~/assets/nav-concert.png" alt="Logo concerts" />
          Concerts
        </nuxt-link>
        <a href="/contact" title="Contact">
          <img src="~/assets/nav-contact.png" alt="Logo contact" />
          Contact
        </a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    reduce: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isReduced: false,
    };
  },
  methods: {
    handleScroll() {
      this.isReduced = window.scrollY > window.innerHeight;
    },
  },
  created() {
    if (this.reduce) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  beforeUnmount() {
    if (this.reduce) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.header {
  @apply w-full bg-primary flex border-b-4 border-secondary top-0 shadow-lg;
}
.header .logo {
  @apply w-1/3 my-auto;
}
.header .navbar {
  @apply flex flex-row items-end justify-around text-white uppercase font-playfair text-center text-2xl ml-auto;
}

.header .navbar a {
  @apply px-12 py-4;
}
.header .navbar a img {
  @apply block mx-auto w-24;
}

/* navbar dragons */
.navbar::before,
.navbar::after {
  content: "";
  @apply w-32 h-40 block bg-no-repeat bg-contain;
}
.navbar::before {
  background-image: url("~assets/dragon-left.png");
}
.navbar::after {
  background-image: url("~assets/dragon-right.png");
}

/* home page header */
.header.h-screen {
  @apply flex-col;
}
.header.h-screen .logo {
  @apply w-2/3 mx-auto;
}
.header.h-screen .navbar {
  @apply text-3xl mx-12;
}
.header.h-screen .navbar a img {
  @apply w-32;
}
.header.h-screen .navbar::before,
.header.h-screen .navbar::after {
  @apply w-44 h-56;
}
</style>
