<template>
  <div>
    <img
      src="~/assets/images/title-gallery.png"
      alt="Logo galerie"
      class="mx-auto h-auto w-full md:h-44 md:w-auto"
    />

    <p v-if="empty" class="text-2xl text-center my-12 text-secondary-dark">
      Aucune image n'est disponible pour le moment :(
    </p>

    <no-ssr>
      <div
        v-masonry
        transition-duration="0.5s"
        item-selector=".masonry-item"
        class="mt-10"
      >
        <div
          v-masonry-tile
          class="masonry-item w-1/2 md:w-1/3 lg:w-1/4 p-1 mb-2"
          :key="index"
          v-for="(image, index) in images"
        >
          <GalleryImage :src="image.path" />
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import NoSSR from "vue-no-ssr";

export default {
  components: {
    "no-ssr": NoSSR
  },
  data() {
    return {
      images: [],
      empty: false
    };
  },
  async fetch() {
    const context = require.context("@/assets/gallery", true, /^.*\.(?:jpg|png)$/);
    context.keys().forEach((key) =>
      this.images.push({
        key: key,
        path: context(key),
      })
    );
  },
  mounted() {
    if(this.images.length == 0) {
      this.empty = true;
    }
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
  },
  head() {
    return {
      title: `Galerie - ${this.$config.siteTitle}`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `Galerie - ${this.$config.siteTitle}` },
        { hid: 'og:description', property: 'og:description', content: 'Galerie d\'images du groupe Manen' }
      ]
    }
  }
};
</script>
