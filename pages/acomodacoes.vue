<template>
  <v-container fluid class="pa-0 ma-0">

    <!-- Hero -->
    <section class="hero-video-section">
      <video
        autoplay
        muted
        loop
        playsinline
        class="hero-video"
        loading="lazy"
        aria-hidden="true"
        tabindex="-1"
      >
        <source src="/videos/hero-acomodacao.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">Nossas Acomodações</h1>
          <p class="hero-subtitle">
            Conforto, natureza e tranquilidade esperando por você
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

    <!-- Suas CategorySections continuam iguais -->
    <CategorySection
      title="Suítes Premium"
      molduraImage="/images/acomodacao/moldura.png"
      :suites="[
        {
          name: 'Suíte Ararinha Azul',
          description: 'Um verdadeiro refúgio em meio à natureza. A Suíte Ararinha Azul combina conforto e rusticidade, oferecendo cama queen size com enxoval premium, lareira interna para noites aconchegantes, banheira de imersão com vista para o jardim e garagem privativa. Ideal para quem busca exclusividade e sofisticação em cada detalhe.',
          imagePrefix: '/images/acomodacao/premium',
          icons: [
            'mid-bed-king-outline',
            'mdi-fireplace',
            'mdi-hot-tub',
            'mdi-garage-variant'
          ],
          reserveLink: 'https://wa.me/5511964032101'
        }
      ]"
    />

    <CategorySection
      title="Suítes Casal"
      molduraImage="/images/acomodacao/moldura.png"
      :suites="[
        {
          name: 'Suíte Arara Vermelha',
          description: 'Um espaço encantador e romântico para casais. A Suíte Arara Vermelha oferece cama queen confortável, varanda privativa com vista para o jardim, frigobar e uma decoração inspirada nas cores vibrantes da natureza. Perfeita para momentos a dois em um ambiente acolhedor e charmoso.',
          imagePrefix: '/images/acomodacao/casal',
          icons: [
            'mid-bed-king-outline',
            'mdi-fireplace',
            'mdi-hot-tub',
            'mdi-garage-variant'
          ],
          reserveLink: 'https://wa.me/5511964032101'
        }
      ]"
    />

    <CategorySection
      title="Suítes Família"
      molduraImage="/images/acomodacao/moldura.png"
      :suites="[
        {
          name: 'Suíte Andorinha',
          description: 'Pensada para famílias que buscam conforto e praticidade. A Suíte Andorinha acomoda até quatro pessoas, contando com cama de casal, camas de solteiro, varanda espaçosa e área externa integrada. Um ambiente arejado, seguro e rodeado pela tranquilidade da natureza, ideal para momentos inesquecíveis em família.',
          imagePrefix: '/images/acomodacao/familia',
          icons: [
            'mdi-bed-king-outline',
            'mdi-fireplace',
            'mdi-hot-tub',
            'mdi-garage-variant'
          ],
          reserveLink: 'https://wa.me/5511964032101'
        }
      ]"
    />

  </v-container>
</template>

<script setup>

import CategorySection from '~/components/CategorySection.vue';

</script>

<style scoped>
/* Hero */
.hero-video-section {
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
  padding-top: 80px; /* para empurrar o conteúdo para baixo do app-bar */
  z-index: 1;
}

.hero-video {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.30);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
}

.hero-content {
  max-width: 90%;
  color: #f3f7f3;
  font-weight: bold;
  text-shadow: 0 0 1px rgb(13, 97, 27), 0 0 2px rgb(10, 196, 4);
  letter-spacing: 2px;
}

.hero-title {
  font-size: 2.8rem;
  margin: 0;
  color: white;
}

.hero-subtitle {
  font-size: 2rem;
  margin-top: 12px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.4rem;
  }
  .hero-subtitle {
    font-size: 1.3rem;
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
  max-width: 900px;
  margin: 80px auto 80px auto; /* Espaço acima e abaixo do card */
  border-radius: 20px;
  background-color: #f3f7f3;
  border: 2px solid #2e7d32;
  padding: 20px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* v-row dentro do card controlado */
.room-card .v-row {
  flex-wrap: nowrap;
}

@media (max-width: 768px) {
  .room-card .v-row {
    flex-wrap: wrap;
  }
}

/* Colunas controladas */
.room-card .v-col {
  flex: 1 1 50%;
  max-width: 50%;
}

@media (max-width: 768px) {
  .room-card .v-col {
    max-width: 100%;
  }
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

.carousel-slide {
  overflow: hidden;
  border-radius: 24px;
}

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
  font-weight: bold;
}

/* ===== Controle das Setas do Carrossel ===== */
:deep(.v-carousel .v-btn.v-btn--icon) {
  opacity: 0 !important;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.room-carousel:hover :deep(.v-carousel .v-btn.v-btn--icon) {
  opacity: 1 !important;
  pointer-events: auto;
}

@media (max-width: 768px) {
  :deep(.v-carousel .v-btn.v-btn--icon) {
    display: none !important;
  }
}

</style>
