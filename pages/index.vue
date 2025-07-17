<template>
  <v-container fluid class="pa-0 ma-0">

    <!-- Hero -->
    <BaseSection class="hero-video-section" data-aos="fade-down" data-aos-duration="1000">
      <div class="hero-video-wrapper">
        <video autoplay muted loop playsinline class="hero-video" loading="lazy" aria-hidden="true" tabindex="-1">
          <source src="/videos/hero.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      <div class="hero-overlay">
        <h1 class="hero-title text-outline-lightgreen">
          Viva a magia de Visconde de Mauá na Pousada Santa Clara
        </h1>
        <v-btn
          color="green darken-3"
          class="mt-4 glow-btn"
          aria-label="Ver acomodações"
          @click="goToAcomodacoes"
        >
          Ver Acomodações
        </v-btn>
      </div>
    </BaseSection>

    <!-- Serviços -->
    <section class="servicos-destaques-section pa-8" data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
      <SectionTitle title="Nossos Serviços" />
      <v-row justify="center" align="stretch" dense>
        <v-col cols="12" md="4" v-for="servico in servicos" :key="servico.title">
          <BaseCard class="servico-card pa-0" outlined>
            <template #image>
              <v-img :src="servico.img" aspect-ratio="16/9" cover alt="Imagem do serviço {{ servico.title }}" />
            </template>
            <template #icon>
              <IconCircle :icon="servico.icon" />
            </template>
            <template #title>
              <h4 class="servico-title mt-3">{{ servico.title }}</h4>
            </template>
            <template #description>
              <p class="servico-description">{{ servico.description }}</p>
            </template>
          </BaseCard>
        </v-col>
      </v-row>
    </section>

    <!-- Turismo Local -->
    <section class="turismo-section pa-8" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
      <SectionTitle
        title="Turismo Local"
        subtitle="Experiências únicas nas redondezas da Pousada."
        align="center"
      />
      <v-row dense>
        <v-col cols="12" md="4" v-for="item in turismo" :key="item.title" data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
          <BaseCard class="turismo-card text-center" outlined>
            <template #image>
              <v-img :src="item.img" cover alt="Imagem de {{ item.title }}" />
            </template>
            <template #title>
              <h3 class="turismo-title mb-2">{{ item.title }}</h3>
            </template>
            <template #description>
              <p class="turismo-description">{{ item.description }}</p>
            </template>
          </BaseCard>
        </v-col>
      </v-row>
    </section>

    <!-- Acomodações -->
    <section class="acomodacoes-section pa-8" data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
      <SectionTitle title="Explore Nossas Acomodações" />
      <v-row dense :cols="cols">
        <v-col v-for="categoria in categoriasDestaques" :key="categoria.name" cols="12" md="4">
          <BaseCard outlined class="pa-0 hover-card acomodacao-card" style="cursor: pointer" @click="goToAcomodacoes">
            <template #image>
              <v-img
                :src="categoria.image"
                alt="Imagem da acomodação categoria {{ categoria.name }}"
                aspect-ratio="16/9"
                cover
                class="acomodacao-img"
              />
            </template>
            <template #title>
              <div class="pa-4 acomodacao-text">
                <div>
                  <h3>{{ categoria.name }}</h3>
                  <p class="acomodacao-description mt-2">{{ categoria.description }}</p>
                </div>
              </div>
            </template>
          </BaseCard>
        </v-col>
      </v-row>
      <v-btn class="mt-6 d-flex mx-auto glow-btn" color="green darken-3" @click="goToAcomodacoes" aria-label="Ver todas as acomodações">
        Ver Todas as Acomodações
      </v-btn>
    </section>

    <!-- Sobre a pousada -->
    <section class="sobre-section pa-8">
      <v-row>
        <v-col cols="12" md="6" data-aos="fade-right" data-aos-duration="1000">
          <SectionTitle title="Um Pouco da Pousada Santa Clara" align="left" />
          <p class="section-text">
            Localizada em meio à exuberância da Mata Atlântica, a Pousada Santa Clara oferece uma experiência única de aconchego, tranquilidade e contato direto com a natureza. Com charme rústico, atendimento acolhedor e um ambiente onde até os pets são bem-vindos, é o destino perfeito para casais, famílias, aventureiros e seus companheiros de quatro patas que buscam momentos inesquecíveis em Visconde de Mauá.
          </p>
        </v-col>
        <v-col cols="12" md="6" data-aos="fade-left" data-aos-duration="1000">
          <FancyImage src="/images/pousada-exterior.jpg" alt="Pousada Santa Clara" />
        </v-col>
      </v-row>
    </section>

    <!-- Depoimentos -->
    <section class="depoimentos-section pa-8" data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
      <SectionTitle title="Depoimentos" align="center" />
      <v-row dense>
        <v-col cols="12" md="4" v-for="depoimento in depoimentos" :key="depoimento.id" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800">
          <v-card outlined class="pa-4 depoimento-card">
            <v-avatar size="64" class="mx-auto mb-4">
              <v-img :src="depoimento.avatar" :alt="`Avatar de ${depoimento.author}`" />
            </v-avatar>
            <p class="section-text">{{ depoimento.text }}</p>
            <p class="font-weight-bold mt-4 text-center">- {{ depoimento.author }}</p>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Contato e Mapa -->
    <section class="contato-mapa-section pa-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
      <SectionTitle title="Localização e Contato" align="center" />
      <v-row class="mt-6" align="stretch">
        <v-col cols="12" md="6" class="map-col" data-aos="fade-right" data-aos-duration="900">
          <iframe
            class="map-iframe"
            src="https://www.google.com/maps?q=Visconde+de+Mauá,+RJ,+Brasil&hl=pt-BR&z=12&output=embed"
            width="100%" height="350" allowfullscreen loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Mapa de Visconde de Mauá"
          ></iframe>
        </v-col>

        <v-col cols="12" md="6" class="d-flex flex-column justify-center" data-aos="fade-left" data-aos-duration="900">
          <div class="contato-info mb-6">
            <p><v-icon left color="green darken-3">mdi-phone</v-icon> (24) 99269-0350</p>
            <p><v-icon left color="green darken-3">mdi-whatsapp</v-icon> (24) 99296-0350</p>
            <p><v-icon left color="green darken-3">mdi-email</v-icon> contato@pousadasantaclara.com</p>
          </div>

          <div class="distancias mb-6">
            <h4 class="distancias-title mb-3">Distâncias aproximadas</h4>
            <v-list dense nav>
              <v-list-item v-for="(dist, index) in distancias" :key="index">
                <v-list-item-icon>
                  <v-icon color="green darken-3">mdi-map-marker-distance</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ dist }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </section>

    <!-- CTA Final -->
    <section class="cta-final-section">
      <div class="cta-video-wrapper">
        <video autoplay muted loop playsinline class="cta-video-bg" loading="lazy" aria-hidden="true" tabindex="-1">
          <source src="/videos/dog.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="cta-content" role="region" aria-label="Chamada para ação">
        <v-icon color="white" class="mb-2" aria-hidden="true">mdi-paw</v-icon>
        <h2 class="text-outline-lightgreen">Viva o descanso que você merece</h2>
        <v-btn
          color="green darken-2"
          class="cta-btn glow-btn"
          elevation="4"
          :to="{ path: '/reservas' }"
          aria-label="Ir para a página de reservas"
        >
          Quero viver isso
        </v-btn>
      </div>
    </section>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { useRouter } from 'vue-router'
import SectionTitle from '~/components/SectionTitle.vue'
import FancyImage from '~/components/FancyImage.vue'
import BaseCard from '~/components/BaseCard.vue'
import BaseSection from '~/components/BaseSection.vue'
import IconCircle from '~/components/IconCircle.vue'

// Responsividade para layout em colunas
const cols = ref(1)
function updateCols() {
  if (window.innerWidth > 800) {
    cols.value = 3
  } else if (window.innerWidth > 600) {
    cols.value = 2
  } else {
    cols.value = 1
  }
}

onMounted(() => {
  updateCols()
  window.addEventListener('resize', updateCols)
  AOS.init({ once: true })
})
onUnmounted(() => {
  window.removeEventListener('resize', updateCols)
})

// Navegação
const router = useRouter()
const goToAcomodacoes = () => router.push('/acomodacoes')
const goToContato = () => router.push('/contato')
const goToReservas = () => router.push('/reservas')

// Dados de destaques e seções
const servicos = [
  {
    title: 'Passeios Guiados',
    description: 'Explore as melhores trilhas com guias especializados, em segurança e conforto.',
    img: '/images/cachoeira.jpg',
    icon: 'mdi-map-marker-path',
  },
  {
    title: 'Acomodações Aconchegantes',
    description: 'Suítes equipadas com todo conforto e decoração charmosa para sua estadia.',
    img: '/images/hospedagem.jpg',
    icon: 'mdi-bed-king-outline',
  },
  {
    title: 'Saboroso Café da Manhã',
    description: 'Experimente pratos típicos feitos com ingredientes frescos e locais.',
    img: '/images/cafe-manha.jpg',
    icon: 'mdi-coffee',
  },
]

const turismo = [
  {
    title: 'Cachoeiras',
    description: 'Cachoeiras paradisíacas para momentos de aventura e relaxamento.',
    img: '/images/cachoeira1.jpg',
  },
  {
    title: 'Trilhas',
    description: 'Trilhas para todos os níveis, com paisagens de tirar o fôlego.',
    img: '/images/trilha.jpg',
  },
  {
    title: 'Observação de Aves',
    description: 'Experiência única para amantes da natureza e fotografia.',
    img: '/images/ave.jpg',
  },
]

const categoriasDestaques = [
  {
    name: 'Casal',
    image: '/images/casal.jpg',
    description: 'Aconchego e romantismo em suítes preparadas especialmente para momentos a dois.',
  },
  {
    name: 'Família',
    image: '/images/familia.jpg',
    description: 'Espaço e conforto para toda a família em um ambiente acolhedor e tranquilo.',
  },
  {
    name: 'Premium',
    image: '/images/premium.jpg',
    description: 'Suítes sofisticadas com vistas privilegiadas e comodidades exclusivas.',
  },
]

const depoimentos = [
  {
    id: 1,
    author: 'Carlos Silva',
    text: 'Uma experiência inesquecível! Atendimento acolhedor e ambiente perfeito.',
    avatar: '/images/cliente1.jpg',
  },
  {
    id: 2,
    author: 'Maria Oliveira',
    text: 'Lugar perfeito para descansar e se conectar com a natureza.',
    avatar: '/images/cliente2.jpg',
  },
  {
    id: 3,
    author: 'Jorge Nunes',
    text: 'Voltarei com certeza! Recomendo a todos que querem paz e conforto.',
    avatar: '/images/cliente3.jpg',
  },
]

const distancias = [
  'Rio de Janeiro - 200 km',
  'São Paulo - 270 km',
  'Resende - 40 km',
  'Penedo - 25 km',
  'Cachoeira do Escorrega - 10 km',
]
</script>

<style scoped>
/* ===================== HERO ===================== */

.hero-video-section {
  position: relative;
  width: 100%;
  min-height: 400px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 3rem;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  pointer-events: none;
  filter: brightness(0.75);
}

.hero-video-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
}

.hero-overlay {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  color: white;
  max-width: 900px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
  color: #e8f5e9;
  text-shadow: 0 0 4px #a5d6a7, 0 0 8px #1b5e20;
}

/* ===================== CTA FINAL ===================== */

.cta-final-section {
  position: relative;
  height: 60vh;
  min-height: 350px;
  overflow: hidden;
  margin-top: 4rem;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.cta-video-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.cta-final-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 2;
}

.cta-content {
  position: relative;
  z-index: 3;
  color: white;
  text-align: center;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  width: 100%;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #e8f5e9;
  text-shadow: 0 0 4px #a5d6a7, 0 0 8px #1b5e20;
  margin-bottom: 1.5rem;
}

/* ===================== BOTÕES COM BRILHO ===================== */

.cta-btn,
.v-btn.cta-btn,
.v-btn.mt-4,
.glow-btn {
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.75rem 2rem;
  color: #e8f5e9 !important;
  text-shadow: 0 0 4px #a5d6a7, 0 0 8px #1b5e20;
  border: none;
}

.v-btn.cta-btn:hover,
.v-btn.mt-4:hover,
.glow-btn:hover {
  box-shadow: 0 0 12px #a5d6a7;
}

/* ===================== CARDS GERAIS ===================== */

.servico-card,
.turismo-card,
.acomodacao-card,
.depoimento-card {
  display: flex;
  flex-direction: column;
  height: 420px; /* altura fixa para o card, você pode ajustar */
  border-radius: 12px;
  overflow: hidden; /* para bordas arredondadas funcionarem direito */
}

.acomodacao-img {
  flex: 1 1 50%; /* ocupa 50% da altura do card */
  width: 100%;
  object-fit: contain; /* ajusta a imagem inteira sem cortar */
  border-radius: 12px 12px 0 0; /* borda arredondada só no topo */
  background-color: #f0f0f0; /* fundo neutro para evitar "buracos" */
}

.acomodacao-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  border-radius: 12px 12px 0 0;
}

.acomodacao-text {
  flex: 1 1 50%; /* ocupa a outra metade */
  background: #fff;
  padding: 1.5rem;
  border-radius: 0 0 12px 12px; /* bordas arredondadas só embaixo */
  text-align: center;
  
  /* Centralizar o texto verticalmente */
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.3;
  color: #2e7d32; /* verde escuro */
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

/* ===================== SECTIONS E TEXTOS ===================== */

.section-title-wrapper {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
}

.servicos-destaques-section {
  background-color: #f8f8f8;
  border-radius: 12px;
  margin-bottom: 3rem;
}

.servico-title {
  font-weight: 700;
}

.servico-description {
  color: #555;
}

.turismo-title {
  font-weight: 700;
  color: #2e7d32;
}

.turismo-description {
  color: #444;
}

.sobre-section p.section-text {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
}

.depoimento-card {
  justify-content: space-between;
}

.section-text {
  font-size: 1rem;
  color: #444;
}

/* ===================== CONTATO ===================== */

.contato-info p {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.distancias-title {
  font-weight: 700;
  color: #2e7d32;
}

.map-iframe {
  border: none;
  border-radius: 12px;
  min-height: 350px;
  width: 100%;
}

/* ===================== RESPONSIVIDADE ===================== */

@media (max-width: 960px) {
  .hero-video-section {
    height: 60vh;
    min-height: 320px;
  }

  .hero-title {
    font-size: 2.4rem;
    padding: 0 1rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .acomodacao-img {
    height: auto;
    padding-top: 56.25%;
  }
}

/* Ajustes específicos para tablets e tamanhos próximos (768x1024, 820x1180, 912x1368, 853x1280) */
@media (min-width: 700px) and (max-width: 950px) {
  .servico-card,
  .turismo-card,
  .acomodacao-card {
    min-height: 420px; /* aumenta altura para não achatar conteúdo */
  }
  .servico-card .v-img,
  .turismo-card .v-img,
  .acomodacao-card .v-img {
    object-fit: contain !important; /* evita corte vertical */
    max-height: 300px;
    width: 100%;
  }
}

@media (max-width: 600px) {
  .cta-final-section {
    height: auto;
    min-height: 400px;
    padding-top: 0;
  }

  .cta-content {
    padding: 2rem 1rem;
    text-align: center;
  }

  .cta-content h2 {
    font-size: 1.6rem;
  }

  .servico-card,
  .turismo-card,
  .acomodacao-card {
    min-height: 380px;
  }
  .servico-card .v-img,
  .turismo-card .v-img,
  .acomodacao-card .v-img {
    max-height: 220px;
  }
}

@media (max-width: 400px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .cta-content h2 {
    font-size: 1.4rem;
  }
}

.acomodacoes-section .v-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 24px; /* bom espaçamento */
  font-size: 1rem;
  min-width: unset !important; /* tira qualquer min-width que o Vuetify aplica */
  width: auto !important;      /* deixa a largura no tamanho do conteúdo */
  max-width: none !important;  /* remove limite */
  margin: 0 auto;
  white-space: nowrap;         /* evita quebra */
}

@media (max-width: 960px) {
  .acomodacoes-section .v-btn {
    padding: 8px 20px;
    font-size: 0.95rem;
  }
}

@media (max-width: 600px) {
  .acomodacoes-section .v-btn {
    padding: 6px 16px;
    font-size: 0.9rem;
  }
}

.card-img,
.v-img {
  aspect-ratio: 16 / 9;
  width: 100%;
}

@media (max-width: 600px) {
  .acomodacao-img {
    height: 160px;    /* diminui altura da imagem */
  }

  .acomodacao-text {
    font-size: 1rem;  /* diminui o texto */
    padding: 0.8rem 1rem;
  }
}

@media (max-width: 600px) {
  .acomodacao-card {
    height: 320px;
  }
  .acomodacao-text {
    font-size: 1.1rem;
    padding: 1rem;
  }
}

</style>



