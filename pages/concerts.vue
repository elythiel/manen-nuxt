<template>
  <div>
    <img
      src="~/assets/images/title-concerts.png"
      alt="Logo concerts"
      class="mx-auto h-auto w-full md:h-44 md:w-auto"
    />

    <p v-if="$fetchState.pending" class="text-2xl text-center my-12 text-secondary-dark">
      Récupération des concerts
    </p>
    <p v-else-if="$fetchState.error" class="text-2xl text-center my-12 text-secondary-dark">
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
        <div v-masonry-tile
             v-for="(concert, index) in concerts"
             :key="index"
             class="masonry-item w-full md:w-1/2 lg:w-1/4 p-2"
        >
          <div class="bg-white p-8"
               :class="{ 'text-primary-light': !isFuture(concert.date) }"
          >
            <span> {{ formatDate(concert.date) }} </span>
            <h3 class="text-xl mb-3">{{ concert.title }}</h3>

            <hr class="border-primary mb-3"/>

            <p v-if="concert.location" class="mb-3"> {{ concert.location }} </p>
            <br>
            <a v-if="concert.moreLink && isFuture(concert.date)"
               :href="concert.moreLink"
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
      concerts: []
    };
  },
  async fetch() {
    this.concerts = await fetch(
      process.env.apiBaseUrl + '/concerts',
      {mode: 'cors'}
    ).then(res => res.json());
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    },
    isFuture(date) {
      return new Date(date) > new Date();
    }
  },
  head() {
    return {
      title: `Concerts - ${this.$config.siteTitle}`,
      meta: [
        {hid: 'og:title', property: 'og:title', content: `Galerie - ${this.$config.siteTitle}`},
        {hid: 'og:description', property: 'og:description', content: 'Liste des concerts du groupe Manen'}
      ]
    }
  }
};
</script>
