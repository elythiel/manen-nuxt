<template>
  <div>
    <div class="min-h-screen flex flex-col justify-start">
      <Header />

      <div class="container text-primary mx-auto px-4 py-12 xl:px-0">
        <Nuxt />
      </div>

      <div class="grid grid-cols-1 items-center mt-auto bg-primary py-2 px-8 text-white gap-4 flex-col lg:grid-cols-3">
        <span class="text-center lg:text-left">2021 © Manen. Tous droits réservés.</span>
        <SocialLinks class="justify-center" />
        <span class="text-center lg:text-right">
          <a href="https://github.com/elythiel/manen-nuxt"
            target="_blank" 
            rel="noopener noreferrer"
            class="text-3xl hover:underline"
            title="GitHub (nouvel onglet)"
            >
            <github-icon />
          </a>
        </span>
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
