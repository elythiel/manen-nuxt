<template>
  <div class="inline-block">
    <a href="#" @click="active = true">
      <slot name="button"></slot>
    </a>
    <div
      v-if="active"
      class="modal-wrapper fixed z-10 h-screen w-screen top-0 left-0 bg-black bg-opacity-25 flex items-center justify-center"
      @click="close"
    >
      <div
        class="relative flex flex-col"
        :class="{ 'bg-white p-12 shadow-lg w-1/2 max-h-5/6': frame }"
      >
        <button
          v-if="frame"
          class="absolute top-0 right-0 p-4"
          @click="active = false"
        >
          <close-icon />
        </button>
        <h2 v-if="title" class="text-3xl mb-10">{{ title }}</h2>
        <div class="flex-grow overflow-y-auto text-lg">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    frame: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    open() {
      this.active = true;
    },
    close(event) {
      event.preventDefault();
      if (event.target.classList.contains("modal-wrapper")) {
        this.active = false;
      }
    },
  },
};
</script>