<template>
  <div>
    <img
      src="~/assets/images/title-galery.png"
      alt="Logo galerie"
      class="mx-auto h-auto w-full md:h-44 md:w-auto"
    />

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
          <img :src="image.path" />
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import NoSSR from "vue-no-ssr";

export default {
  components: {
    "no-ssr": NoSSR,
  },
  data() {
    return {
      images: [],
    };
  },
  async fetch() {
    const context = require.context("@/assets/galery", true, /^.*\.jpg$/);
    context.keys().forEach((key) =>
      this.images.push({
        key: key,
        path: context(key),
      })
    );
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
  },
};
</script>
