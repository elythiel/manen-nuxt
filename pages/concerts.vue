<template>
  <div>
    <img
      src="~/assets/title-concerts.png"
      alt="Logo concerts"
      class="mx-auto w-full h-auto lg:h-44 lg:w-auto"
    />

    <no-ssr>
      <div
        v-masonry
        transition-duration="0.5s"
        item-selector=".masonry-item"
        horizontal-order="true"
        class="mt-10"
      >
        <div v-masonry-tile v-for="(concert, index) in concerts" :key="index" class="masonry-item w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div class="bg-white p-8">
            <p> {{ formatDate(concert.date) }} </p>
            <h3 class="text-xl mb-3"> {{ concert.title }} </h3>

            <hr class="border-primary mb-3" />

            <p v-if="!concert.location.link" class="mb-3"> {{ concert.location.title }} </p>
            <a v-if="concert.location.link" 
              :href="concert.location.link ? concert.location.link : '#'"
              class="inline-block underline hover:no-underline mb-3" 
              > {{ concert.location.title }} <open-in-new-icon /></a>
            <br>
            <a v-if="concert.link" 
              :href="concert.link"
              target="_blank"
              class="inline-block px-4 py-1 border border-primary transition-colors hover:bg-black hover:bg-opacity-10"
              >
              Plus d'infos
            </a>
          </div>
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
      concerts: [],
    };
  },
  async fetch() {
    this.concerts = await this.$content("concerts").sortBy('date', 'desc').fetch()
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    }
  }
};
</script>
