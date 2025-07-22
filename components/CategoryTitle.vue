<template>
  <section
    class="section-category-title"
  >
    <h2 class="category-title">{{ title }}</h2>
    <img
      :src="image"
      alt="Moldura decorativa"
      class="category-moldura"
    />
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
  text-align: center;
  padding: 2rem 1rem;
}

.category-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #2e7d32;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
}

.category-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background-color: #2e7d32;
  margin: 10px auto 0 auto;
  border-radius: 2px;
}

.category-moldura {
  width: 100px; /* ou ajuste conforme o design */
  max-width: 90%;
  display: block;
  margin: 0 auto;
  padding: 0;
  transform: translateY(-2px);
}
</style>
