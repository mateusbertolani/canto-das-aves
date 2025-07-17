<template>
  <section
    class="section-category-title"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <h2 class="category-title">{{ title }}</h2>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.section-category-title {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 250px;
  margin: 40px 0;
}

.category-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #033815;
  font-weight: bold;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  max-width: 80%;
}
</style>
