<template>
  <v-sheet
    height="300"
    class="d-flex align-center justify-center"
    style="position: relative; color: white; overflow: hidden;"
  >
    <!-- Imagem de fundo -->
    <v-img
      :src="image"
      :alt="alt"
      height="300"
      class="fade-image"
      cover
      style="position: absolute; inset: 0;"
    />

    <!-- Camada escura sobre a imagem -->
    <div
      style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)); z-index: 1;"
    ></div>

    <!-- Título e subtítulo -->
    <div class="text-center px-4 content-box">
      <h1 class="section-header-title mb-2">{{ title }}</h1>
      <div v-if="subtitle" class="section-header-subtitle mb-4">{{ subtitle }}</div>
      <div class="section-underline mx-auto"></div>
    </div>
  </v-sheet>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Imagem de fundo do cabeçalho'
  }
})
</script>

<style scoped>
.fade-image {
  filter: brightness(0.7);
  transition: filter 0.5s ease;
}

.content-box {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.section-header-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 auto;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

.section-header-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto;
  color: #f1f1f1;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
}

.section-underline {
  height: 4px;
  width: 80px;
  background-color: #A5D6A7;
  border-radius: 2px;
}
</style>
