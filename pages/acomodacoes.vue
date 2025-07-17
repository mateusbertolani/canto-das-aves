<template>
  <v-container fluid class="pa-0 ma-0">

    <!-- Hero -->
    <section class="hero-video-section">
      <video autoplay muted loop playsinline class="hero-video">
        <source src="/videos/hero-acomodacao.mp4" type="video/mp4">
        Seu navagador não suporta vídeos HTML5.
      </video>
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">Nossas Acomodações</h1>
          <p class="hero-subtitle">
            Conforto, natureza e tranquilidade esperando você
          </p>
        </div>
      </div>
    </section>

    <!-- Introdução -->
    <section class="intro-text-section">
      <v-container>
        <p class="intro-text">
          Descubra os cantinhos que preparamos para seu conforto e descanso. <br />
          Cada quarto pensado para oferecer uma experiência única em meio à natureza.
        </p>
      </v-container>
    </section>

    <!-- Título da Categoria -->
    <CategoryTitle
      title="Suítes Premium"
      image="/images/acomodacao/moldura.png"
    />

    <!-- Card Suítes -->
    <v-card class="room-card" elevation="4">
      <v-row>

        <!-- Carrossel de imagens -->
        <v-col cols="12" md="6">
          <v-carousel
            hide-delimiter-background
            height="350"
            class="room-carousel"
            cycle
            interval="4000"
          >
            <v-carousel-item
              v-for="n in 7"
              :key="n"
              class="carousel-slide"
            >
              <v-img
                :src="`/images/acomodacao/premium${n}.jpg`"
                class="carousel-image-proper"
                cover
              />
            </v-carousel-item>
          </v-carousel>
        </v-col>

        <!-- Informações -->
        <v-col cols="12" md="6" class="room-info">
          <h3 class="room-title">Suíte Ararinha Azul</h3>
          <p class="room-description">
            Um verdadeiro refúgio em meio à natureza. A Suíte Ararinha Azul combina conforto e rusticidade, oferecendo:
            cama queen size com enxoval premium, lareira interna para noites aconchegantes, banheira de imersão com vista para o jardim e garagem privativa.
            Experimente o equilíbrio perfeito entre sofisticação e simplicidade.
          </p>

          <!-- Ícones -->
          <div class="features-icons">
            <v-icon size="30">mdi-bed-king-outline</v-icon>
            <v-icon size="30">mdi-fireplace</v-icon>
            <v-icon size="30">mdi-hot-tub</v-icon>
            <v-icon size="30">mdi-garage-variant</v-icon>
          </div>

          <!-- Botão Reservar -->
          <v-btn
            color="success"
            variant="elevated"
            class="reserve-button"
            href="https://wa.me/5511964032101"
            target="_blank"
          >
            Reservar Agora
          </v-btn>
        </v-col>

      </v-row>
    </v-card>

  </v-container>
</template>

<script setup>
import CategoryTitle from '~/components/CategoryTitle.vue'
</script>

<style scoped>

/* Hero */
.hero-video-section {
  position: relative;
  width: 100%;
  height: 65vh;
  overflow: hidden;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  max-width: 90%;
}

.hero-title,
.hero-subtitle {
  color: #f3f7f3;
  font-weight: bold;
  text-shadow: 0 0 1px rgb(13, 97, 27), 0 0 2px rgb(10, 196, 4);
  text-align: center;
  letter-spacing: 2px;
}

.hero-title {
  font-size: 2.8rem;
}

.hero-subtitle {
  font-size: 2rem;
  margin-top: 12px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }
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

/* Card do Quarto */
.room-card {
  max-width: 1100px;
  margin: 50px auto;
  border-radius: 20px;
  background-color: #f3f7f3;
  border: 2px solid #2e7d32;
  padding: 24px;
  overflow: hidden;
}

/* Coluna de Texto */
.room-info {
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.room-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #248144;
  font-weight: bold;
  margin-bottom: 15px;
}

.room-description {
  font-size: 1.2rem;
  color: #444;
  flex-grow: 1;
  line-height: 1.6;
}

/* Carrossel */
.room-carousel {
  border-radius: 24px;
  overflow: hidden;
  position: relative;
}

/* Slide do carrossel */
.carousel-slide {
  overflow: hidden;
  border-radius: 24px;
}

/* Imagem real dentro do carrossel */
.carousel-image-proper {
  border-radius: 24px;
  object-fit: cover;
  width: 100%;
  height: 350px;
}

/* Ícones */
.features-icons {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}

.features-icons .v-icon {
  color: #2e7d32;
}

/* Botão */
.reserve-button {
  align-self: flex-start;
}


/* ===== Controle das Setas do Carrossel ===== */

/* Esconde setas por padrão */
:deep(.v-carousel .v-btn.v-btn--icon) {
  opacity: 0 !important;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

/* Exibe setas no hover */
.room-carousel:hover :deep(.v-carousel .v-btn.v-btn--icon) {
  opacity: 1 !important;
  pointer-events: auto;
}

/* No mobile, oculta completamente */
@media (max-width: 768px) {
  :deep(.v-carousel .v-btn.v-btn--icon) {
    display: none !important;
  }
}

</style>