<template>
  <a
    :href="whatsUrl"
    target="_blank"
    rel="noopener"
    class="whatsapp-float"
    aria-label="WhatsApp"
  >
    <v-icon size="36" color="white">mdi-whatsapp</v-icon>
  </a>
</template>

<script setup>
const phoneNumber = '5511964032101'
const whatsUrl = `https://wa.me/${phoneNumber}`
</script>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: #25D366;
  border-radius: 50%;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.whatsapp-float:hover {
  background-color: #1DA851;
  cursor: pointer;
  text-decoration: none;
}

.whatsapp-float v-icon {
  opacity: 1 !important;
  visibility: visible !important;
  color: white !important;
}
</style>
