<template>
  <v-card outlined class="testimonial-card pa-4" :style="{ minHeight: minHeight + 'px' }">
    <v-avatar size="64" class="mx-auto mb-4">
      <v-img :src="avatar" alt="Foto do cliente" />
    </v-avatar>
    <p class="testimonial-text">{{ text }}</p>
    <p class="testimonial-author">- {{ author }}</p>
  </v-card>
</template>

<script setup>
defineProps({
  avatar: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  minHeight: {
    type: Number,
    default: 300,
  },
})
</script>

<style scoped>
.testimonial-card {
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.testimonial-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.testimonial-text {
  color: #444;
  font-size: 1rem;
  flex-grow: 1;
}

.testimonial-author {
  font-weight: 700;
  margin-top: 1rem;
  color: #2e7d32;
  font-size: 1.1rem;
}
</style>
