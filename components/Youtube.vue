<template>
  <div class="wrapper">
    <iframe
      class="mx-auto"
      width="560"
      height="315"
      frameborder="0"
      :src="getSrc()"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    list: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getSrc() {
      let src = this.list
        ? "https://youtube.com/embed/videoseries?list="
        : "https://www.youtube.com/embed/";
      return src + this.id;
    },
  },
};
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply overflow-hidden relative h-0;
  padding-bottom: 56.25%;
}

.wrapper iframe {
  @apply absolute left-0 top-0 h-full w-full;
}
</style>