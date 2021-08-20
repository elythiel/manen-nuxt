<template>
  <div>
    <p v-if="$fetchState.pending" class="text-2xl text-center my-12 text-secondary-dark">
      Récupération des albums
    </p>
    <p v-else-if="$fetchState.error" class="text-2xl text-center my-12 text-secondary-dark">
      Une erreur est survenue :(
    </p>

    <div v-for="(album, index) in albums" :key="index">
      <h2 class="text-2xl text-primary mb-10">
        {{ album.title }}
        <Modal v-if="album.youtube" :frame="false">
          <template v-slot:button>
            <youtube-icon class="text-3xl" :title="album.title"/>
          </template>
          <youtube :url="album.youtube"/>
        </Modal>
        <a v-if="album.spotify" :href="album.spotify" target="_blank" title="Ecouter sur spotify">
          <spotify-icon class="text-3xl"/>
        </a>
      </h2>

      <div
        class="flex flex-col mb-12 items-center space-y-4 lg:items-start lg:flex-row lg:space-y-0 lg:space-x-8 xl:h-150 xl:items-stretch">
        <img
          :src="album.image"
          class="w-1/2 h-auto lg:w-1/6 xl:w-auto xl:h-150"
        />
        <div
          class="flex-grow flex flex-col w-full xl:w-auto self-center justify-center bg-white text-secondary-dark h-full"
        >
          <Songs :albumId="album.id"/>
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
    this.albums = await fetch(
      process.env.apiBaseUrl + '/albums',
      {mode: 'cors'}
    ).then(res => res.json());
  },
  head() {
    return {
      title: `Albums - ${this.$config.siteTitle}`,
      meta: [
        {hid: 'og:title', property: 'og:title', content: `Albums - ${this.$config.siteTitle}`},
        {hid: 'og:description', property: 'og:description', content: 'Liste des titres du groupe Manen'}
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
