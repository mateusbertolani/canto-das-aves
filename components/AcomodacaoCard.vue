<template>
  <v-card
    class="acomodacao-card"
    :to="{ path: to }"
    elevation="2"
    hover
  >
    <div
      class="acomodacao-img"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <div class="acomodacao-overlay" />
      <div class="acomodacao-text">
        {{ title }}
      </div>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    default: '/',
  },
})
</script>

<style scoped>
.acomodacao-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
}

.acomodacao-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.acomodacao-img {
  aspect-ratio: 16 / 9;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 12px 12px 0 0;
}

.acomodacao-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  z-index: 1;
  border-radius: 12px 12px 0 0;
}

.acomodacao-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 1rem;
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  border-radius: 0 0 12px 12px;
}
</style>
