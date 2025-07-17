<template>
  <ul class="icon-bullet-list">
    <li v-for="(item, index) in items" :key="index" class="list-item">
      <v-icon class="bullet-icon" :color="iconColor" size="20">{{ icon }}</v-icon>
      <span class="item-text">{{ item }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  icon: {
    type: String,
    default: 'mdi-check-circle-outline',
  },
  iconColor: {
    type: String,
    default: 'green darken-2',
  },
})
</script>

<style scoped>
.icon-bullet-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-family: 'Roboto', sans-serif;
  color: #3d3d3d;
  font-size: 1rem;
}

.bullet-icon {
  margin-right: 0.5rem;
  min-width: 20px;
}
</style>
