<template>
<div>
  <button @click="active = !active" class="fixed top-0 right-0 text-4xl p-4 rounded z-30">
    <close-icon v-if="active" class="text-black" />
    <menu-icon v-else class="text-white" />
  </button>
  <nav
    class="navbar fixed top-0 left-0 w-full h-full bg-white text-primary z-20 flex flex-col justify-center text-3xl"
    v-if="active"
  >
    <nuxt-link to="/gallery" title="Galerie" class="py-8 focus:bg-gray-100" @click.native="active=false">
      <img
        src="~/assets/images/nav-gallery.png"
        alt="Logo galerie"
        class="mx-auto h-32 w-auto hidden md:block"
      />
      Galerie
    </nuxt-link>
    <nuxt-link to="/albums" title="Albums" class="py-8 focus:bg-gray-100" @click.native="active=false">
      <img
        src="~/assets/images/nav-albums.png"
        alt="Logo albums"
        class="mx-auto h-32 w-auto hidden md:block"
      />
      Albums
    </nuxt-link>
    <nuxt-link to="/concerts" title="Concerts" class="py-8 focus:bg-gray-100" @click.native="active=false">
      <img
        src="~/assets/images/nav-concerts.png"
        alt="Logo concerts"
        class="mx-auto h-32 w-auto hidden md:block"
      />
      Concerts
    </nuxt-link>
    <nuxt-link to="/" title="Contact" class="py-8 focus:bg-gray-100" @click.native="active=false">
      <img
        src="~/assets/images/nav-contact.png"
        alt="Logo contact"
        class="mx-auto h-32 w-auto hidden md:block"
      />
      Contact
    </nuxt-link>
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