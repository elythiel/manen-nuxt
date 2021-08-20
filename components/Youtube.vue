<template>
  <div class="wrapper" v-html="oembed.html">
  </div>
</template>

<script>
export default {
  props: {
    url: String
  },
  data() {
    return {
      oembed: Object
    };
  },
  async fetch() {
    this.oembed = await fetch(
      'https://youtube.com/oembed?url=' + this.url
    ).then(res => res.json());
  }
};
</script>

<style lang="postcss">
.wrapper {
  @apply overflow-hidden relative h-0;
  padding-bottom: 56.25%;
}

.wrapper iframe {
  @apply absolute left-0 top-0 h-full w-full;
}
</style>
