<template>
  <v-card class="turismo-card">
    <!-- Imagem com alt dinâmico e proporção consistente -->
    <v-img
      :src="image"
      :alt="title"
      class="turismo-img"
      cover
    />

    <v-card-text class="text-center px-4">
      <!-- Ícone opcional com estilo personalizado -->
      <v-icon
        v-if="icon"
        class="icon-circle mb-2"
        :color="iconColor"
        size="28"
      >
        {{ icon }}
      </v-icon>

      <h3 class="turismo-title">{{ title }}</h3>
      <p class="turismo-description">{{ description }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  iconColor: {
    type: String,
    default: 'white'
  }
})
</script>

<style scoped>
.turismo-card {
  border: 1.5px solid #a5d6a7;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 360px;
  cursor: pointer;
}

.turismo-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Imagem com proporção consistente */
.turismo-img {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}

.turismo-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2e7d32;
  margin: 1rem 0 0.5rem;
}

.turismo-description {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  max-width: 300px;
  margin: 0 auto;
}

/* Ícone com fundo arredondado */
.icon-circle {
  background-color: #a5d6a7;
  color: white;
  padding: 12px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
}
</style>
