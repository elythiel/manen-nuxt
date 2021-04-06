<template>
  <div>
    <img
      src="~/assets/images/title-concerts.png"
      alt="Logo concerts"
      class="mx-auto h-auto w-full md:h-44 md:w-auto"
    />
    
    <p v-if="empty" class="text-2xl text-center my-12 text-secondary-dark">
      Aucun concert n'est prévu pour le moment :(
    </p>

    <no-ssr>
      <div
        v-masonry
        transition-duration="0.5s"
        item-selector=".masonry-item"
        horizontal-order="true"
        class="mt-10"
      >
        <div v-masonry-tile v-for="(concert, index) in concerts" :key="index" class="masonry-item w-full md:w-1/2 lg:w-1/4 p-2">
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
      empty: false
    };
  },
  async fetch() {
    this.concerts = await this.$content("concerts").sortBy('date', 'desc').fetch()
    if(!this.concerts.length) {
      this.empty = true
    }
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
  },
  head() {
    return {
      title: `Concerts - ${this.$config.siteTitle}`,
      meta: [
        { hid: 'og:title', name: 'og:title', content: `Galerie - ${this.$config.siteTitle}` },
        { hid: 'og:description', name: 'og:description', content: 'Liste des concerts du groupe Manen' },
        { hid: 'twitter:title', name: 'twitter:title', content: `Concerts - ${this.$config.siteTitle}` },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Liste des concerts du groupe Manen' }
      ]
    }
  }
};
</script>
