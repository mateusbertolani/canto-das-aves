<template>
  <v-card
    class="elevation-2 rounded-lg d-flex flex-column"
    :style="`border-top: 4px solid ${borderColor}; background-color:white; height: 100%;`"
  >
    <!-- imagem com altura fixa -->
    <v-img :src="image" :alt="title" height="200" cover></v-img>

    <!-- texto com flex grow e altura máxima para manter alinhamento -->
    <v-card-text class="flex-grow-1" style="min-height: 120px; max-height: 140px; overflow: hidden;">
      <div class="text-h6 font-weight-bold mb-2">{{ title }}</div>
      <div class="text-body-2" style="display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden;">
        {{ description }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="green-darken-2" class="mt-3" variant="flat">
        {{ buttonText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script setup>

defineProps({
  title: String,
  description: String,
  image: String,
  borderColor: {
    type: String,
    default: '#2E7D32', //verde padrão
  },
  buttonText: {
    type: String,
    default: 'Ver Disponibilidade',
  }
});

</script>