<template>
  <div class="flex flex-cols justify-between items-center">
    <span>{{ song.title }}</span>
    <div class="text-2xl">
      <LyricsModal v-if="song.lyrics" :title="song.title" :authors="song.authors" :guests="song.guests">
        <template v-slot:button>
          <text-icon />
        </template>
        <div v-html="song.lyrics"></div>
      </LyricsModal>

      <Modal v-if="song.youtube" :frame="false">
        <template v-slot:button>
          <youtube-icon />
        </template>
        <youtube :url="song.youtube" />
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
    song: Object
  },
  data() {
    return {
      lyricsActive: false
    };
  }
};
</script>
