<template>
  <v-card class="room-card" elevation="4">
    <v-img
      :src="image"
      height="200px"
      cover
      class="rounded-t-lg"
    ></v-img>

    <v-card-title class="text-h6">{{ title }}</v-card-title>

    <v-card-text>
      {{ description }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" @click="$emit('reservar')">
        Reservar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String
});
</script>

<style scoped>
.room-card {
  max-width: 350px;
  margin: auto;
  border-radius: 12px;
}
</style>
