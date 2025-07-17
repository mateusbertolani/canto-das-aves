<template>
  <v-container fluid class="pa-0 mt-12">
    <v-row class="d-flex align-center flex-wrap-reverse" no-gutters>
      <!-- Texto e informações -->
      <v-col cols="12" md="6" class="px-6 py-8">
        <h2 class="section-title">Chegar até a Santa Clara é fácil</h2>
        <p class="section-text">
          Nossa pousada está cercada por natureza e tranquilidade, mas com fácil acesso pelas principais cidades. 
          Venha viver dias de descanso em um refúgio acolhedor.
        </p>

        <div class="distancias mb-4">
          <h3 class="distancias-title mb-2">Distâncias aproximadas:</h3>
          <v-list density="compact">
            <v-list-item>
              <v-list-item-icon><v-icon color="green">mdi-map-marker-distance</v-icon></v-list-item-icon>
              <v-list-item-title>São Paulo: 3h30</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon color="green">mdi-map-marker-distance</v-icon></v-list-item-icon>
              <v-list-item-title>Rio de Janeiro: 3h</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon><v-icon color="green">mdi-map-marker-distance</v-icon></v-list-item-icon>
              <v-list-item-title>Belo Horizonte: 5h30</v-list-item-title>
            </v-list-item>
          </v-list>
        </div>

        <div class="contato-info">
          <p><v-icon class="me-2" color="green">mdi-phone</v-icon>(24) 99999-9999</p>
          <p><v-icon class="me-2" color="green">mdi-email</v-icon>contato@pousadasantaclara.com.br</p>
          <p><v-icon class="me-2" color="green">mdi-map-marker</v-icon>Visconde de Mauá - RJ</p>
        </div>
      </v-col>

      <!-- Mapa -->
      <v-col cols="12" md="6" class="pa-4">
        <iframe
          class="map-iframe"
          width="100%"
          height="370"
          frameborder="0"
          style="border:0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0000000000005!2d-44.60000000000001!3d-22.300000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9999999999999999%3APousada%20Santa%20Clara!5e0!3m2!1spt-BR!2sbr!4v0000000000000"
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Este componente é estático e não possui props
</script>
