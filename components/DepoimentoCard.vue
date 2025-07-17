<template>
  <v-card class="depoimento-card pa-4">
    <v-icon size="36" color="amber darken-2" class="mb-2">mdi-format-quote-open</v-icon>
    
    <p class="comentario">“{{ comentario }}”</p>

    <div class="autor mt-4 d-flex align-center">
      <v-avatar size="40" class="me-3" v-if="avatar">
        <v-img :src="avatar" alt="Foto do autor" />
      </v-avatar>
      <div>
        <p class="nome">{{ nome }}</p>
        <p class="origem" v-if="origem">{{ origem }}</p>
      </div>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  comentario: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  origem: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  }
})
</script>

<style scoped>
.depoimento-card {
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
  background-color: #fff;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}

.depoimento-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.comentario {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
  font-style: italic;
}

.nome {
  font-weight: 700;
  color: #2e7d32;
  margin: 0;
}

.origem {
  font-size: 0.9rem;
  color: #777;
  margin: 0;
}
</style>
