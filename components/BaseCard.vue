<template>
  <v-card
    outlined
    class="base-card"
    :elevation="hoverable ? 0 : 2"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{ 'hovered': hoverable && hover }"
  >
    <!-- Slot da imagem com altura garantida -->
    <div class="card-image">
      <slot name="image" />
    </div>

    <v-card-text class="pa-4 text-center">
      <slot name="icon" />
      <slot name="title" />
      <slot name="description" />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  hoverable: {
    type: Boolean,
    default: true
  }
})

const hover = ref(false)
</script>

<style scoped>
.base-card {
  border: 1.5px solid #a5d6a7;
  border-radius: 12px;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
}

.card-image {
  height: 200px;
  width: 100%;
  overflow: hidden;
  position: relative;
}

/* Estilos para garantir que a imagem ocupe todo o espaço */
.card-image ::v-deep(.v-img) {
  height: 100% !important;
  width: 100% !important;
}

.card-image ::v-deep(.v-img__img) {
  object-fit: cover !important;
  height: 100% !important;
  width: 100% !important;
}

.base-card.hovered {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}
</style>
