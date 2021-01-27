<template>
  <div class="flex flex-cols justify-between">
    <span>{{ song.title }}</span>
    <div>
      <Modal v-if="song.lyrics" :title="song.title">
        <template v-slot:button>
          <text-icon class="text-lg" />
        </template>
        <nuxt-content :document="lyrics" />
      </Modal>

      <a
        v-if="song.youtube"
        href="#"
        title="Ecouter sur youtube"
        @click="youtubeActive = true"
      >
        <youtube-icon class="text-lg" />
      </a>

      <a
        v-if="song.spotify"
        :href="song.spotify"
        target="_blank"
        title="Ecouter sur spotify (nouvel onglet)"
      >
        <spotify-icon class="text-lg" />
      </a>
    </div>

    <div
      v-if="youtubeActive"
      class="fixed z-10 h-screen w-screen top-0 left-0 bg-black bg-opacity-25 flex items-center justify-center"
      @click="youtubeActive = false"
    >
      <iframe
        width="560"
        height="315"
        :src="'https://youtube.com/embed/' + song.youtube"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    song: Object,
  },
  data() {
    return {
      lyricsActive: false,
      lyrics: null,
      youtubeActive: false,
    };
  },
  async fetch() {
    if (this.song.lyrics) {
      this.lyrics = await this.$content("lyrics/" + this.song.lyrics).fetch();
    }
  },
};
</script>