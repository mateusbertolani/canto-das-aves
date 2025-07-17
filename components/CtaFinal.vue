<template>
  <section class="cta-final-section" @click="handleClick">
    <video
      class="cta-video-bg"
      autoplay
      muted
      loop
      playsinline
      :src="videoSrc"
      aria-hidden="true"
    ></video>
    <div class="cta-content">
      <v-icon color="white" class="mb-2" size="36">{{ icon }}</v-icon>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <v-btn
        v-if="buttonText"
        color="green darken-2"
        class="cta-btn"
        elevation="4"
        :to="buttonLink"
      >
        {{ buttonText }}
      </v-btn>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  videoSrc: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'mdi-paw'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: ''
  },
  buttonLink: {
    type: [String, Object],
    default: null
  }
})

const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>

<style scoped>
.cta-final-section {
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(135deg, #2e7d32, #1b4d20);
  transition: background-color 0.3s ease;
}

.cta-final-section:hover {
  background: linear-gradient(135deg, #1b4d20, #145214);
}

.cta-video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.9);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 2;
  padding: 2rem;
  max-width: 700px;
}

.cta-content v-icon {
  font-size: 36px;
}

.cta-content h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 0 8px rgba(0,0,0,0.5);
  font-family: 'Playfair Display', serif;
}

.cta-content p {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #fff;
  text-shadow: 0 0 6px rgba(0,0,0,0.4);
  font-family: 'Roboto', sans-serif;
}

.cta-btn {
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  padding: 12px 24px;
  transition: transform 0.3s ease;
}

.cta-btn:hover {
  transform: scale(1.05);
}
</style>
