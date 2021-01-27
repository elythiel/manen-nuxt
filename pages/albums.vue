<template>
  <div>
    <p v-if="$fetchState.pending">Récupération des albums</p>
    <p v-else-if="$fetchState.error">Une erreur est survenue :(</p>

    <div v-for="album in albums">
      <h2 class="text-2xl text-primary mb-4">
        {{ album.title }}
        <a
          v-if="album.youtube"
          href="#"
          @click="youtubeActive = true"
          title="Ecouter sur youtube"
        >
          <youtube-icon />
        </a>
        <a v-if="album.spotify" :href="album.spotify" target="_blank" title="">
          <spotify-icon />
        </a>
      </h2>

      <div class="flex flex-grow mb-12 h-150">
        <img
          :src="require('~/assets/images/' + album.cover)"
          class="w-auto h-150"
        />
        <div
          class="flex-grow ml-4 flex flex-col self-center justify-center py-4 bg-white text-secondary-dark h-full"
        >
          <div class="py-4 h-auto overflow-y-auto">
            <Song
              :song="song"
              v-for="song in album.songs"
              class="py-2 px-16 hover:bg-secondary-light"
            />
          </div>
        </div>
      </div>

      <div
        v-if="youtubeActive"
        class="fixed z-10 h-screen w-screen top-0 left-0 bg-black bg-opacity-25 flex items-center justify-center"
        @click="youtubeActive = false"
      >
        <iframe
          width="560"
          height="315"
          :src="'https://youtube.com/embed/videoseries?list=' + album.youtube"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albums: [],
      youtubeActive: false,
    };
  },
  async fetch() {
    this.albums = await this.$content("albums")
      .sortBy("release", "desc")
      .fetch();
  },
};
</script>
