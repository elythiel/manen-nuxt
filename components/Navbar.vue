<template>
<div id="navbar-desktop" class="navbar ml-auto">
  <nav
    class="space-x-12 bg-primary text-white flex flex-row items-center justify-around flex-nowrap"
  >
    <img
      src="~/assets/images/dragon-left.png"
      alt="Navbar dragon"
      width="142" height="224"
      class="header-dragon hidden h-28 w-auto md:block"
    />

    <nuxt-link to="/gallery" title="Galerie" class="navbar-link p-2 md:py-0">
      <img
        src="~/assets/images/nav-gallery.png"
        alt="Logo galerie"
        width="128" height="128"
        class="mx-auto h-16 w-auto hidden md:block"
      />
      Galerie
    </nuxt-link>
    <nuxt-link to="/albums" title="Albums" class="navbar-link p-2 md:py-0">
      <img
        src="~/assets/images/nav-albums.png"
        alt="Logo albums"
        width="128" height="128"
        class="mx-auto h-16 w-auto hidden md:block"
      />
      Albums
    </nuxt-link>
    <nuxt-link to="/concerts" title="Concerts" class="navbar-link p-2 md:py-0">
      <img
        src="~/assets/images/nav-concerts.png"
        alt="Logo concerts"
        width="128" height="128"
        class="mx-auto h-16 w-auto hidden md:block"
      />
      Concerts
    </nuxt-link>
    <a :href="`mailto:${$config.contactEmail}`" title="Contact" class="navbar-link p-2 md:py-0">
      <img
        src="~/assets/images/nav-contact.png"
        alt="Logo contact"
        width="128" height="128"
        class="mx-auto h-16 w-auto hidden md:block"
      />
      Contact
    </a>

    <img
      src="~/assets/images/dragon-right.png"
      alt="Navbar dragon"
      width="142" height="224"
      class="header-dragon hidden h-28 w-auto md:block"
    />
  </nav>
</div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
/* home page header */
.header.h-screen .navbar {
  @apply text-3xl w-full ml-0;
}
.header.h-screen .navbar a {
  @apply mb-4;
}
.header.h-screen .navbar a img {
  @apply h-32;
}
.header.h-screen .navbar .header-dragon {
  @apply h-56;
}
</style>