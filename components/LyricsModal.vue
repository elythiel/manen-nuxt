<template>
  <div class="inline-block">
    <a href="#" @click="open">
      <slot name="button"></slot>
    </a>

    <portal to="modals">
      <div
        v-if="active"
        class="modal-wrapper fixed z-10 h-screen w-screen top-0 left-0 bg-black bg-opacity-25 flex items-center justify-center"
        @click="close"
      >
        <div class="relative flex flex-col w-5/6 md:w-1/2 max-h-5/6 between bg-white p-4 lg:py-10 lg:px-12 shadow-lg text-secondary-dark">
          <button
            class="absolute top-0 right-0 p-4"
            @click="active = false"
          >
            <close-icon />
          </button>
          <div class="mb-6">
            <h2 class="text-3xl font-light">
              {{title}}
            </h2>
            <div class="font-sm">
              <div v-if="authors.length" class="font-sm">
                {{ authors.join(', ') }}
              </div>
              <div v-if="guests.length">
                Invité(s) : {{ guests.join(', ') }}
              </div>
            </div>
          </div>
          <div class="flex-grow overflow-y-auto text-lg">
            <slot></slot>
          </div>
        </div>
      </div>
    </portal>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    authors: {
      type: Array,
      default: () => []
    },
    guests: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    open(e) {
      e.preventDefault();
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