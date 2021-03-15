<template>
  <div>
    <Header />

    <div class="container mx-auto px-4 py-4 md:px-0 md:py-12 text-primary">
      <Nuxt />
    </div>

    <portal-target name="modals"></portal-target>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-secondary-light font-serif;
}
</style>
