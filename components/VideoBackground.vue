<template>
  <section class="video-background-section">
    <video
      ref="videoRef"
      class="video-bg"
      :src="videoSrc"
      autoplay
      muted
      loop
      playsinline
    ></video>
    <div class="overlay" :style="{ backgroundColor: overlayColor }"></div>
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  videoSrc: {
    type: String,
    required: true
  },
  overlayColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.4)' // escurece levemente o vídeo para destacar conteúdo
  }
})

const videoRef = ref(null)

onMounted(() => {
  // Garante que o vídeo toque automaticamente (alguns navegadores exigem interação)
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      // pode falhar se o autoplay não for permitido, ignore
    })
  }
})
</script>

<style scoped>
.video-background-section {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.9);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.content {
  position: relative;
  z-index: 3;
  padding: 1rem 2rem;
  max-width: 900px;
  width: 100%;
}
</style>
