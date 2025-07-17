<template>
  <section
    :class="['base-section', variantClass, extraClass]"
    v-bind="$attrs"
  >
    <slot />
  </section>
</template>

<script setup>
const props = defineProps({
  extraClass: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'default', // opções: 'default', 'green', 'white', 'dark'
  },
})

const variantClass = {
  default: 'section-default',
  green: 'section-green',
  white: 'section-white',
  dark: 'section-dark'
}[props.variant] || 'section-default'
</script>

<style scoped>
.base-section {
  padding: 4rem 1.5rem;
}

/* Variantes de fundo */
.section-default {
  background: linear-gradient(to bottom, #f9f9f7 0%, #ffffff 100%);
}

.section-green {
  background: linear-gradient(to bottom, #e8f5e9 0%, #ffffff 100%);
}

.section-white {
  background-color: #ffffff;
}

.section-dark {
  background: #1b4d20;
  color: white;
}
</style>
