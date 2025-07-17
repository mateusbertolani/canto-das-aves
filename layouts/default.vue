<template>
  <v-app>
    <AppHeader />
    <v-main>
      <!-- ENVOLVE TUDO DENTRO DE UM WRAPPER -->
      <Transition name="fade" mode="out-in">
        <div class="page-wrapper">
          <NuxtPage />
        </div>
      </Transition>
    </v-main>
    <WhatsAppFloating />
    <AppFooter />
  </v-app>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import WhatsAppFloating from '@/components/WhatsAppFloating.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped>
.page-wrapper {
  padding: 0; /* zera o espaço extra */
  min-height: calc(100vh - 128px); /* mantém o tamanho mínimo */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
