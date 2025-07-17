<template>
  <v-card
    class="servico-card"
    elevation="2"
    hover
  >
    <div class="icon-circle" :style="{ backgroundColor: iconBackground }">
      <v-icon :color="iconColor" size="32">{{ icon }}</v-icon>
    </div>

    <v-card-text>
      <h3 class="servico-title">{{ title }}</h3>
      <p class="servico-description">{{ description }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  iconColor: {
    type: String,
    default: 'green-darken-2',
  },
  iconBackground: {
    type: String,
    default: '#e8f5e9',
  },
})
</script>

<style scoped>
.servico-card {
  border: 1.5px solid #a5d6a7;
  min-height: 420px;
  border-radius: 12px;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  text-align: center;
  padding: 1.5rem 1rem;
}

.servico-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.icon-circle {
  margin: 0 auto 1rem;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.servico-title {
  color: #2e7d32;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
}

.servico-description {
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 280px;
  margin: 0 auto;
}
</style>
