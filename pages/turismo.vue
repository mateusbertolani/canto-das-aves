<template>
  <v-container fluid class="pa-0" style="background-color: #f9f9f7;">
    <!-- Hero -->
    <section class="hero-section">
      <video autoplay muted loop playsinline class="hero-video">
        <source src="/videos/hero-turismo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
      <div class="hero-overlay">
        <h1 class="hero-title white--text">
          Turismo e Região
        </h1>
      </div>
    </section>

    <!-- Introdução -->
    <section class="intro-text-section">
      <v-container>
        <p class="intro-text">
          Descubra as maravilhas naturais, culturais e gastronômicas que tornam Visconde de Mauá inesquecível.
        </p>
      </v-container>
    </section>

    <!-- Seções intercaladas -->
    <template v-for="(section, index) in sections" :key="index">
      <v-container
        :class="['section-container', index % 2 === 0 ? 'layout-left' : 'layout-right']"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <v-row align="center" class="py-12">
          <v-col cols="12" md="6" class="image-col">
            <v-img
              :src="section.image"
              :alt="section.alt"
              class="section-image"
              cover
              lazy-src="/images/turismo/montanha.jpg"
            />
          </v-col>

          <v-col cols="12" md="6" class="text-col">
            <h2 class="section-title">{{ section.title }}</h2>
            <p class="section-text" v-for="(p, i) in section.paragraphs" :key="i">
              {{ p }}
            </p>
            <v-btn
              v-if="section.buttonText && section.buttonLink"
              class="mt-6"
              color="green darken-2"
              dark
              large
              rounded
              :href="section.buttonLink"
              target="_blank"
              rel="noopener"
            >
              {{ section.buttonText }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>

    <!-- CTA Final com Mapa -->
    <v-container class="text-center py-16" style="background-color: #dcedc8;">
      <h2 class="cta-title mb-4">Planeje sua visita</h2>
      <p class="cta-text mb-8">
        Explore Visconde de Mauá com conforto e tranquilidade. Faça sua reserva na Pousada Canto das Aves e aproveite tudo que a região tem a oferecer.
      </p>
      <v-btn
        color="green darken-2"
        dark
        large
        rounded
        @click="goToBooking"
        aria-label="Faça sua reserva agora na Pousada Canto das Aves"
      >
        Reserve agora
      </v-btn>

      <div class="map-wrapper mt-12">
        <iframe
          src="https://www.google.com/maps?q=Visconde+de+Mauá,+RJ,+Brasil&hl=pt-BR&z=12&output=embed"
          width="100%"
          height="400"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa de Visconde de Mauá"
        ></iframe>
      </div>
    </v-container>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

const goToBooking = () => {
  router.push('/reservas')
}

onMounted(() => {
  console.log('Página Turismo e Região carregada')
})

const sections = [
  {
    title: 'Cachoeiras e Trilhas',
    alt: 'Cachoeira em meio à mata verde',
    image: '/images/turismo/cachoeira.jpg',
    paragraphs: [
      'Visconde de Mauá é famoso por suas cachoeiras exuberantes e trilhas para todos os níveis. Explore quedas d\'água como a Véu da Noiva, Cachoeira do Escorrega e Poço do Marimbondo, onde a natureza se revela em sua forma mais pura.',
      'Caminhar por essas trilhas é uma experiência de reconexão com o meio ambiente, ideal para quem busca tranquilidade e aventura.'
    ],
    buttonText: 'Veja as trilhas',
    buttonLink: 'https://www.viscondedemaua.com.br/trilhas'
  },
  {
    title: 'Gastronomia Local',
    alt: 'Mesa posta com pratos típicos e bebidas',
    image: '/images/turismo/gastronomia.jpg',
    paragraphs: [
      'A culinária de Visconde de Mauá traz sabores únicos, com influências da comida mineira, gaúcha e do sul do país. Experimente pratos caseiros, doces regionais e um café artesanal que conquistam todos os paladares.',
      'Restaurantes charmosos e acolhedores oferecem opções para todos os gostos, do tradicional ao contemporâneo.'
    ],
    buttonText: 'Restaurantes recomendados',
    buttonLink: 'https://www.tripadvisor.com.br/Restaurants-g303633-Visconde_de_Maua_State_of_Rio_de_Janeiro.html'
  },
  {
    title: 'Passeios Culturais e Eventos',
    alt: 'Evento cultural com música ao ar livre',
    image: '/images/turismo/espelho-dagua.jpg',
    paragraphs: [
      'A região é palco de diversos eventos culturais ao longo do ano, como festivais de música, feiras de artesanato e encontros gastronômicos.',
      'Descubra a cultura local, participe de oficinas e conheça os artistas que fazem de Visconde de Mauá um lugar especial.'
    ],
    buttonText: 'Confira a agenda',
    buttonLink: 'https://www.viscondedemaua.com.br/eventos'
  },
  {
    title: 'Natureza e Bem-Estar',
    alt: 'Pessoa meditando ao ar livre cercada por natureza',
    image: '/images/turismo/natureza.jpg',
    paragraphs: [
      'Além das belezas naturais, Visconde de Mauá oferece opções para relaxar e cuidar do corpo e mente, como spas, massagens e práticas de yoga em meio à natureza.',
      'Conecte-se com a energia do local e renove suas energias em ambientes pensados para o seu bem-estar.'
    ]
  }
]
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
}

.hero-video {
  width: 100%;
  height: 320px;
  object-fit: cover;
  filter: brightness(0.5);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  z-index: 1;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2.8rem;
  text-shadow: 0 1px 8px rgba(80, 200, 120, 0.7);
  margin-bottom: 8px;
  color: white;
  align-items: center;
}

.hero-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  text-shadow: 0 1px 6px rgba(80, 200, 120, 0.6);
  max-width: 700px;
}

/* Introdução */
.intro-text-section {
  margin: 40px 0;
  text-align: center;
}

.intro-text {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.8rem;
  color: #033815;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-align: center;
}

.section-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.layout-left .image-col {
  order: 1;
}

.layout-left .text-col {
  order: 2;
  padding-left: 40px;
}

.layout-right .image-col {
  order: 2;
}

.layout-right .text-col {
  order: 1;
  padding-right: 40px;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 16px;
  color: #336633;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.section-text {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #4a4a4a;
  line-height: 1.7;
  margin-bottom: 16px;
}

.section-image {
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  max-height: 320px;
  width: 100%;
  object-fit: cover;
}

.cta-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  color: #2e7d32;
}

.cta-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  color: #336633;
  max-width: 600px;
  margin: 0 auto;
}

.map-wrapper {
  max-width: 900px;
  margin: 24px auto 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Responsividade */

@media (max-width: 960px) {
  .layout-left .text-col,
  .layout-left .image-col,
  .layout-right .text-col,
  .layout-right .image-col {
    order: unset !important;
    padding: 0 !important;
  }

  .section-container {
    padding: 0 12px;
  }

  .hero-section {
    height: 220px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}

.fancy-image {
  width: 100%;
  height: 100%; /* ou uma altura fixa */
  object-fit: cover;
}

</style>
