<template>
  <div
    class="icon-circle"
    :class="{ 'with-shadow': shadow }"
    :style="{ backgroundColor: bgColor }"
  >
    <v-icon :color="color" :size="size">
      {{ icon }}
    </v-icon>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'white'
  },
  bgColor: {
    type: String,
    default: '#a5d6a7' // tom verde suave
  },
  size: {
    type: [Number, String],
    default: 36
  },
  shadow: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.icon-circle {
  border-radius: 50%;
  padding: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease;
}

.icon-circle.with-shadow {
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
}
</style>
