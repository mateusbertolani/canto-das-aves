<template>
  <v-app-bar color="white" elevation="2" fixed>
    <v-container
      fluid
      class="pa-0"
      style="display: flex; align-items: center; justify-content: space-between; flex-wrap: nowrap;"
    >
      <!-- Logo clicável -->
      <router-link to="/" style="flex: 1 1 auto; min-width: 0; padding-left: 16px; display: flex; align-items: center;">
        <img src="/images/logo.png" alt="Pousada Santa Clara" style="height: 90px;"/>
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
const links = [
  { label: 'A Pousada', to: '/a-pousada' },
  { label: 'Acomodações', to: '/acomodacoes' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Reservas', to: '/reservas' },
  { label: 'Contato', to: '/contato' }
]
</script>

<style scoped>
.title-responsive {
  font-size: clamp(1.25rem, 2vw, 2.5rem);
  line-height: 1.1;
  white-space: normal;
  text-align: left;
  padding-top: 4px;
}
</style>
