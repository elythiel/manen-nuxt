<template>
  <div>
    <p v-if="$fetchState.pending">Récupération des albums</p>
    <p v-else-if="$fetchState.error">Une erreur est survenue :(</p>

    <div v-for="(album, index) in albums" :key="index">
      <h2 class="text-2xl text-primary mb-10">
        {{ album.title }}
        <Modal v-if="album.youtube" :frame="false">
          <template v-slot:button>
            <youtube-icon />
          </template>
          <youtube :list="true" :id="album.youtube" />
        </Modal>
        <a v-if="album.spotify" :href="album.spotify" target="_blank" title="">
          <spotify-icon />
        </a>
      </h2>

      <div class="flex flex-col space-y-8 mb-12 lg:flex-row lg:h-150 lg:space-y-0 lg:space-x-8">
        <img
          :src="require('~/assets/images/' + album.cover)"
          class="w-full h-auto lg:w-auto lg:h-150"
        />
        <div
          class="flex-grow flex flex-col w-full lg:w-auto self-center justify-center bg-white text-secondary-dark h-full"
        >
          <div class="py-4 h-auto overflow-y-auto">
            <div v-for="(song, index) in album.songs" class="group hover:bg-secondary-light">
              <Song
                :song="song"
                :class="{'border-t border-secondary-light': index > 0}"
                class="py-4 mx-16"
              />
            </div>
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
};
</script>

<style scoped>
.group:hover + .group .border-t {
  @apply border-transparent;
}
</style>