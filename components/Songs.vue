<template>
  <div class="py-4 h-auto overflow-y-auto">
    <div v-for="(song, index) in songs" :key="index" class="hover:bg-secondary-light">
      <Song
        :song="song"
        :class="{'border-t border-secondary-light': index > 0}"
        class="py-4 mx-8 lg:mx-16"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    albumId: String
  },
  data() {
    return {
      songs: []
    };
  },
  async fetch() {
    this.songs = await fetch(
      process.env.apiBaseUrl + '/albums/' + this.albumId + '/songs',
      { mode: 'cors' }
    ).then(res => res.json());
  },
};
</script>
