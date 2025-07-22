<template>
  <footer class="bg-green-darken-4 text-white py-6">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <div class="text-center text-md-start">
            <div class="text-6 font-weight-bold">Pousada Canto das Aves</div>
            <div class="text-body-2">Chalés em meio à natureza</div>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <div class="text-center text-md-start">
            <div class="d-flex align-center justify-center justify-md-start mb-2">
              <v-icon>mdi-whatsapp</v-icon>
              <span class="ml-2">(11) 96403-2101</span>
            </div>
            <div class="d-flex align-center justify-center justify-md-start mb-2">
              <v-icon>mdi-email</v-icon>
              <span class="ml-2">contato@pousadacantodasaves.com.br</span>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div class="text-center text-md-start">
            <div class="mb-2 text-subtitle-2 font-weight-medium d-none d-md-block">
              Nos siga também:
            </div>
            <div class="d-flex justify-center justify-md-start">
              <v-btn
                v-for="link in socialLinks"
                :key="link.icon"
                icon
                class="mx-1 hover-grow"
                :href="link.url"
                target="_blank"
              >
                <v-icon size="24">{{ link.icon }}</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>


<script setup>

const socialLinks= [
  { icon: 'mdi-facebook',
  url: 'https://www.facebook.com'
  },
  { icon: 'mdi-instagram',
  url: 'https://www.instagram.com'
  },
  { icon: 'mdi-youtube' ,
    url: 'https://www.youtube.com'
  },
  { icon: 'mdi-earth' ,
    url: 'https://www.tripadvisor.com.br'
  }
]

</script>

<style scoped>

.hover-grow {
  transition: transform 0.2s ease-in-out;
}

.hover-grow:hover {
  transform: scale(1.2);
}

</style>