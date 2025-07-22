<template>
  <v-app-bar
    :color="scrolled ? 'white' : 'transparent'"
    :elevation="scrolled ? 2 : 0"
    fixed
    class="app-header"
  >
    <v-container
      fluid
      class="pa-0"
      style="display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap;"
    >
      <!-- Logo clicável -->
      <router-link to="/" style="flex: 1 1 auto; min-width: 0; padding-left: 16px; display: flex; align-items: center;">
        <img :class="{'logo-scrolled': scrolled}" src="/images/logo.png" alt="Pousada Canto das Aves" style="height: 90px;"/>
      </router-link>

      <!-- Menu horizontal -->
      <div
        class="d-none d-md-flex"
        style="flex: 0 1 auto; justify-content: center;"
      >
        <v-btn
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          variant="text"
          class="text-green-darken-2 font-weight-medium"
        >
          {{ link.label }}
        </v-btn>
      </div>

      <!-- Botões extras -->
      <div
        style="flex: 0 0 auto; padding-right: 16px;"
        class="d-flex align-center"
      >
        <v-btn
          class="mx-2 d-none d-md-flex"
          color="green-darken-2"
          variant="flat"
          style="white-space: nowrap;"
          @click="$router.push('/reservas')"
        >
          Reserve Aqui
        </v-btn>

        <!-- Menu hambúrguer (aparece só no mobile) -->
        <div class="d-flex d-md-none">
          <v-menu location="bottom end">
            <template #activator="{ props }">
              <v-btn icon v-bind="props">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="link in links"
                :key="link.to"
                :to="link.to"
                link
              >
                <v-list-item-title>{{ link.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);

const links = [
  { label: 'A Pousada', to: '/a-pousada' },
  { label: 'Acomodações', to: '/acomodacoes' },
  { label: 'Turismo e Região', to: '/turismo' },
  { label: 'Contato', to: '/contato' }
]

function handleScroll() {
  scrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.app-header {
  transition: background-color 0.4s ease, box-shadow 0.4s ease;
  z-index: 20; /* garante que fique sobre o vídeo */
  background-color: transparent; /* padrão transparente */
  box-shadow: none; /* sem sombra inicialmente */
}

.logo-scrolled {
  transition: height 0.4s ease;
  height: 70px !important; /* pode diminuir o logo ao rolar, opcional */
}
</style>
