<template>
  <v-card
    class="elevation-1 rounded-lg py-2 px-4 d-inline-flex align-center gap-2"
    :color="backgroundColor"
  >
    <v-icon :color="iconColor" size="26">{{ icon }}</v-icon>
    <span :class="['category-title', textColor]">{{ title }}</span>
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
  backgroundColor: {
    type: String,
    default: '#d7ccc8', // Bege suave
  },
  iconColor: {
    type: String,
    default: 'green-darken-2',
  },
  textColor: {
    type: String,
    default: 'text-green-darken-4',
  },
})
</script>

<style scoped>
.category-title {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  font-size: 1.25rem;
}
</style>
