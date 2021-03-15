<template>
  <div class="flex flex-cols justify-between">
    <span>{{ song.title }}</span>
    <div class="text-2xl">
      <Modal v-if="song.lyrics" :title="song.title">
        <template v-slot:button>
          <text-icon />
        </template>
        <nuxt-content :document="lyrics" />
      </Modal>

      <Modal v-if="song.youtube" :frame="false">
        <template v-slot:button>
          <youtube-icon />
        </template>
        <youtube :id="song.youtube" />
      </Modal>

      <a
        v-if="song.spotify"
        :href="song.spotify"
        target="_blank"
        title="Ecouter sur spotify (nouvel onglet)"
      >
        <spotify-icon />
      </a>
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
    };
  },
  async fetch() {
    if (this.song.lyrics) {
      this.lyrics = await this.$content("lyrics/" + this.song.lyrics).fetch();
    }
  },
};
</script>