<template>

<span @click="isActive = !isActive" 
  class="cursor-pointer flex items-center justify-center" 
  :class="{'fixed top-0 left-0 h-full w-full z-10 bg-black bg-opacity-25': isActive}"
  >
  <img :src="src" :class="{'w-5/6 h-auto md:w-auto md:h-screen md:max-h-5/6': isActive}" />
  
  <button v-if="isActive" class="absolute top-0 right-0 p-4 text-black">
    <close-icon />
  </button>
</span>

</template>

<script>
export default {
  props: {
    src: String
  },
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style scoped>
span, img {
  transition: all ease 200ms;
}
</style>