<template>
<div>
  <button @click="active = true" class="text-2xl p-4 rounded z-30 text-white lg:p-4 lg:text-4xl">
    <menu-icon />
  </button>
  <nav
    class="navbar fixed top-0 left-0 w-full h-full bg-white text-primary z-20 flex flex-col justify-center items-center text-xl lg:text-3xl"
    v-if="active"
  >
    <button @click="active = false" class="fixed top-0 right-0 text-2xl p-4 rounded z-30 text-black lg-4 lg:text-4xl">
      <close-icon />
    </button>
    <nuxt-link to="/gallery" title="Galerie" class="navbar-link py-2 lg:py-4" @click.native="active=false">
      <img
        src="~/assets/images/nav-gallery.png"
        alt="Logo galerie"
        class="mx-auto h-16 xl:h-32 w-auto"
      />
      Galerie
    </nuxt-link>
    <nuxt-link to="/albums" title="Albums" class="navbar-link py-2 lg:py-4" @click.native="active=false">
      <img
        src="~/assets/images/nav-albums.png"
        alt="Logo albums"
        class="mx-auto h-16 xl:h-32 w-auto"
      />
      Albums
    </nuxt-link>
    <nuxt-link to="/concerts" title="Concerts" class="navbar-link py-2 lg:py-4" @click.native="active=false">
      <img
        src="~/assets/images/nav-concerts.png"
        alt="Logo concerts"
        class="mx-auto h-16 xl:h-32 w-auto"
      />
      Concerts
    </nuxt-link>
    <a :href="`mailto:${$config.contactEmail}`" title="Contact" class="navbar-link py-2 lg:py-4" @click.native="active=false">
      <img
        src="~/assets/images/nav-contact.png"
        alt="Logo contact"
        class="mx-auto h-16 xl:h-32 w-auto"
      />
      Contact
    </a>
  </nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  }
};
</script>