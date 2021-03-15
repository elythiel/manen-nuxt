<template>
  <div>
    <Header />

    <div class="container text-primary mx-auto px-4 py-4 md:py-12 xl:px-0">
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
