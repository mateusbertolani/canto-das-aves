<template>
  <footer class="bg-green-darken-4 text-white py-6">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <div class="text-center text-md-start">
            <div class="text-6 font-weight-bold">Pousada Santa Clara</div>
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
              <span class="ml-2">contato@pousadasantaclara.com.br</span>
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
  url: 'https://www.facebook.com/pousadagrandchamp?gad_source=1&gad_campaignid=14501339161&gbraid=0AAAAABVrdRE_za1B7apNVMwzlKgeJIi7-&gclid=CjwKCAjwsZPDBhBWEiwADuO6y8VHcMfO38qp65bbZd-k48HuCDJMPrsy62WX1Q96xrgbmXXkRb5BUxoCrEEQAvD_BwE'
  },
  { icon: 'mdi-instagram',
  url: 'https://www.instagram.com/pousada_santaclara/'
  },
  { icon: 'mdi-twitter' ,
    url: 'https://www.tiktok.com/discover/grandchamp-campos-do-jordao'
  },
  { icon: 'mdi-youtube' ,
    url: 'https://www.youtube.com/watch?v=jhnUV6SpbfA'
  },
  { icon: 'mdi-earth' ,
    url: 'https://www.tripadvisor.com.br/Hotel_Review-g303607-d2463367-Reviews-Pousada_Grandchamp-Campos_Do_Jordao_State_of_Sao_Paulo.html'
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