<template>
  <div class="text-justify">
    <img
      src="~/assets/band.png"
      alt="Photo des membres de Manen"
      class="mb-12"
    />
    <div class="px-8 my-12">
      <p class="mb-2">
        Le groupe Månen est constitué de deux frères à la composition et d'un
        ami à l'écriture.
      </p>
      <p class="mb-2">
        Månen existe depuis une dizaine d'années, ils se produisent sur de
        petites scènes en région parisienne.
      </p>
      <p class="mb-2">
        Le nom Månen signifiant "la lune" en norvégien est un clin d'œil aux
        inspirations scandinaves et celtiques du groupe.
      </p>
      <p class="mb-2">
        Månen vient récréer son propre folklore s'inspirant des mythologies et
        légendes européennes.
      </p>
      <p class="mb-2">
        La nature et les astres sont tant de muses pour leur univers épique et
        fantaisiste.
      </p>
      <p>
        En 2020 Månen sort son premier album Étendues Perdues dont la
        composition aux accords tranchés et à la voix puissante nous emporte
        dans une épopée aventureuse de style néo folk rock.
      </p>
    </div>

    <iframe
      class="mx-auto"
      width="560"
      height="315"
      frameborder="0"
      src="https://www.youtube.com/embed/hYsNfLw-sgo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
