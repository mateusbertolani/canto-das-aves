<template>
  <div class="overlay-image-wrapper" :style="{ height: height }">
    <img :src="src" :alt="alt" class="image" />
    <div class="overlay" :style="{ backgroundColor: overlayColor }"></div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  overlayColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.4)'
  },
  height: {
    type: String,
    default: '300px'
  }
})
</script>

<style scoped>
.overlay-image-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.content {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 0 1rem;
  width: 90%;
  max-width: 600px;
}
</style>
