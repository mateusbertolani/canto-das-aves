<template>
  <div class="servico-texto">
    <div class="icon-circle">
      <v-icon color="white" size="28">{{ icon }}</v-icon>
    </div>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.servico-texto {
  flex: 1 1 250px;
  max-width: 300px;
  background: #f0f8f4;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(46, 125, 50, 0.1);
  text-align: center;
  transition: box-shadow 0.3s ease;
  cursor: default;
}

.servico-texto:hover {
  box-shadow: 0 8px 25px rgba(46, 125, 50, 0.3);
}

.icon-circle {
  margin: 0 auto 1rem;
  background-color: #a5d6a7;
  color: white;
  box-shadow: 0 4px 12px rgba(46,125,50,0.4);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

p {
  color: #3d3d3d;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}
</style>
