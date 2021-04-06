<template>
  <div>
    <div class="min-h-screen flex flex-col justify-start">
      <Header />

      <div class="container text-primary mx-auto px-4 py-4 md:py-12 xl:px-0">
        <Nuxt />
      </div>

      <div class="flex mt-auto items-center justify-between bg-primary py-2 px-8 text-white space-x-4 flex-col lg:flex-row">
        <span class="justify-self-start">2021 © Manen. Tous droits réservés.</span>
        <SocialLinks />
        <a class="text-3xl hover:underline" href="https://github.com/elythiel/manen-nuxt" target="_blank">
          <github-icon />
        </a>
      </div>
    </div>

    <portal-target name="modals"></portal-target>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-secondary-light font-serif;
}
</style>
