<template>
  <div :class="['section-title-wrapper', alignClass]">
    <h2 class="section-title" :style="{ fontSize: titleSize }">{{ title }}</h2>
    <div class="underline" :style="{ backgroundColor: underlineColor }"></div>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  align: {
    type: String,
    default: 'center',
    validator: value => ['left', 'center'].includes(value)
  },
  underlineColor: {
    type: String,
    default: '#A5D6A7'
  },
  titleSize: {
    type: String,
    default: '2.25rem'
  }
})

const alignClass = computed(() =>
  props.align === 'center' ? 'text-center' : 'text-left'
)
</script>

<style scoped>
.section-title-wrapper {
  margin-bottom: 2.5rem;
}

.underline {
  width: 80px;
  height: 4px;
  margin: 0.25rem auto 1rem;
  transition: width 0.4s ease;
}

.section-title-wrapper:hover .underline {
  width: 100px;
}

.section-title-wrapper.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #444;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0.01em;
  margin: 0.5rem auto 0;
  padding: 0 1rem;
    text-align: center;
  margin-top: 0.75rem;
  margin-bottom: 0;
}

.text-left .underline,
.text-left .section-subtitle {
  margin-left: 0;
  margin-right: 0;
  text-align: left;
}
</style>
