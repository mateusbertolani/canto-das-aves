<template>
  <div class="contato-info">
    <p v-if="phone">
      <v-icon color="green darken-2" class="me-2">mdi-phone</v-icon>
      <a :href="`tel:${phone}`">{{ phone }}</a>
    </p>
    <p v-if="email">
      <v-icon color="green darken-2" class="me-2">mdi-email</v-icon>
      <a :href="`mailto:${email}`">{{ email }}</a>
    </p>
    <p v-if="address">
      <v-icon color="green darken-2" class="me-2">mdi-map-marker</v-icon>
      {{ address }}
    </p>
    <p v-if="whatsapp">
      <v-icon color="green darken-2" class="me-2">mdi-whatsapp</v-icon>
      <a :href="`https://wa.me/${whatsapp}`" target="_blank" rel="noopener noreferrer">
        {{ whatsappFormatted }}
      </a>
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  phone: String,
  email: String,
  address: String,
  whatsapp: String,
})

const whatsappFormatted = computed(() => {
  if (!props.whatsapp) return ''
  // Formata número WhatsApp para exibição, exemplo: +55 11 91234-5678
  const num = props.whatsapp.replace(/\D/g, '')
  if (num.length === 11) {
    return `+${num.slice(0, 2)} ${num.slice(2, 4)} ${num.slice(4, 9)}-${num.slice(9)}`
  }
  return props.whatsapp
})
</script>

<style scoped>
.contato-info p {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  color: #2e7d32;
  font-weight: 600;
}

.contato-info a {
  color: #2e7d32;
  text-decoration: none;
}

.contato-info a:hover {
  text-decoration: underline;
}

.me-2 {
  margin-right: 0.5rem;
}
</style>
