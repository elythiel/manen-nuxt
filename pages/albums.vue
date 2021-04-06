<template>
  <div>
    <p v-if="$fetchState.pending">Récupération des albums</p>
    <p v-else-if="$fetchState.error">Une erreur est survenue :(</p>

    <div v-for="(album, index) in albums" :key="index">
      <h2 class="text-2xl text-primary mb-10">
        {{ album.title }}
        <Modal v-if="album.youtube" :frame="false">
          <template v-slot:button>
            <youtube-icon class="text-3xl" />
          </template>
          <youtube :list="true" :id="album.youtube" />
        </Modal>
        <a v-if="album.spotify" :href="album.spotify" target="_blank" title="Ecouter sur spotify">
          <spotify-icon class="text-3xl" />
        </a>
      </h2>

      <div class="flex flex-col mb-12 items-center space-y-4 lg:items-start lg:flex-row lg:space-y-0 lg:space-x-8 xl:h-150 xl:items-stretch">
        <img
          :src="require('~/assets/images/' + album.cover)"
          class="w-1/2 h-auto lg:w-1/6 xl:w-auto xl:h-150"
        />
        <div
          class="flex-grow flex flex-col w-full xl:w-auto self-center justify-center bg-white text-secondary-dark h-full"
        >
          <div class="py-4 h-auto overflow-y-auto">
            <div v-for="(song, index) in album.songs" :key="index" class="hover:bg-secondary-light">
              <Song
                :song="song"
                :class="{'border-t border-secondary-light': index > 0}"
                class="py-4 mx-8 lg:mx-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albums: [],
    };
  },
  async fetch() {
    this.albums = await this.$content("albums")
      .sortBy("release", "desc")
      .fetch();
  },
  head() {
    return {
      title: `Albums - ${this.$config.siteTitle}`,
      meta: [
        { hid: 'og:title', name: 'og:title', content: `Galerie - ${this.$config.siteTitle}` },
        { hid: 'og:description', name: 'og:description', content: 'Liste des titres du groupe Manen' },
        { hid: 'twitter:title', name: 'twitter:title', content: `Concerts - ${this.$config.siteTitle}` },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Liste des titres du groupe Manen' }
      ]
    }
  }
};
</script>

<style scoped>
.group:hover + .group .border-t {
  @apply border-transparent;
}
</style>