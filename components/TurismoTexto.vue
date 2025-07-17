<template>
  <div class="turismo-texto">
    <v-icon
      v-if="icon"
      class="icon-circle mb-3"
      :color="iconColor"
      size="28"
    >
      {{ icon }}
    </v-icon>
    <h3 class="turismo-title">{{ title }}</h3>
    <p class="turismo-description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: ''
  },
  iconColor: {
    type: String,
    default: 'white'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.turismo-texto {
  flex: 1 1 250px;
  max-width: 300px;
  background: #f0f8f4;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(46, 125, 50, 0.1);
  text-align: center;
  transition: box-shadow 0.3s ease;
  cursor: default;
}

.turismo-texto:hover {
  box-shadow: 0 8px 25px rgba(46, 125, 50, 0.3);
}

.icon-circle {
  background-color: #a5d6a7;
  color: white;
  padding: 12px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(46,125,50,0.4);
  width: 56px;
  height: 56px;
}

.turismo-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2e7d32;
  margin-bottom: 0.5rem;
}

.turismo-description {
  font-size: 1rem;
  color: #3d3d3d;
  line-height: 1.5;
  margin: 0;
}
</style>
