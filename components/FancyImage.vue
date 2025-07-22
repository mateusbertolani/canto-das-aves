<template>
  <div
    class="fancy-image-wrapper"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{ 'hovered': hover }"
    :style="{ maxWidth: maxWidth + 'px', borderRadius }"
  >
    <img
      :src="src"
      :alt="alt"
      class="fancy-image"
      loading="lazy"
      :style="{ borderRadius }"
    />

    <div
      v-if="showOverlay"
      class="overlay"
      :class="{ active: hover }"
      :style="{ borderRadius }"
    ></div>

    <div v-if="$slots.default" class="image-slot">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  maxWidth: { type: [String, Number], default: '500' },
  borderRadius: { type: String, default: '12px' },
  hoverScale: { type: Number, default: 1.03 },
  showOverlay: { type: Boolean, default: true }
})

const hover = ref(false)
</script>

<style scoped>
.fancy-image-wrapper {
  position: relative;
  width: 100%;
  height: 320px; /* altura fixa para uniformizar */
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.fancy-image-wrapper.hovered {
  transform: scale(1.03);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.fancy-image {
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
  pointer-events: none;
  background: linear-gradient(180deg, rgba(165, 214, 167, 0.25), rgba(165, 214, 167, 0));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.overlay.active {
  opacity: 1;
}

.image-slot {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 2;
  color: white;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 1.125rem;
}
</style>
