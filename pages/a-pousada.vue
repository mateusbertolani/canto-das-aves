<template>
  <v-container fluid class="pa-0">
    <!-- Hero -->
    <section class="hero-video-section">
      <video autoplay muted loop playsinline class="hero-video">
        <source src="/videos/hero-a-pousada.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      <div class="hero-overlay">
        <h1 class="hero-title">Onde o aconchego encontra a natureza</h1>
      </div>
    </section>

    <!-- Introdução -->
    <section class="intro-text-section">
      <v-container>
        <p class="intro-text">
          Conheça nossa história, estrutura e tudo que torna o Canto das Aves tão especial.
        </p>
      </v-container>
    </section>

    <!-- Seções de conteúdo -->
    <template v-for="(section, index) in sections" :key="index">
      <v-container class="py-14 px-4 px-md-12" data-aos="fade-up">
        <v-row align="center" class="mb-md-8">
          <v-col
            cols="12"
            md="6"
            class="d-flex align-center justify-center"
            :class="index % 2 === 0 ? 'order-md-1' : 'order-md-2'"
          >
            <FancyImage
              :src="section.image"
              :alt="section.alt"
              :max-width="500"
              loading="lazy"
            />
          </v-col>

          <v-col
            cols="12"
            md="6"
            class="d-flex flex-column justify-center"
            :class="index % 2 === 0 ? 'order-md-2' : 'order-md-1'"
          >
            <h2 class="section-title">{{ section.title }}</h2>
            <div>
              <p
                v-for="(p, i) in section.paragraphs"
                :key="i"
                class="section-paragraph"
              >
                {{ p }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </template>

    <!-- Depoimentos -->
    <v-container class="pt-12 pb-16">
      <v-row class="mb-8">
        <v-col cols="12" class="text-center">
          <h2 class="section-title">O que dizem nossos hóspedes</h2>
          <p class="section-subtitle" style="margin-bottom: 0;">
            Experiências reais, memórias verdadeiras
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="4"
          class="d-flex flex-column align-center text-center px-6 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <v-avatar size="64" class="mb-4">
            <v-img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Depoimento hóspede 1"
            />
          </v-avatar>
          <p class="text-body-1 font-italic" style="color: #555;">
            “Um pedacinho do paraíso! Acordar com o som do rio, tomar um café
            incrível e sentir a paz do lugar foi mágico. Voltaremos com certeza!”
          </p>
          <strong class="mt-2" style="color: #6b6b6b;">Juliana Castro – SP</strong>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="d-flex flex-column align-center text-center px-6 mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <v-avatar size="64" class="mb-4">
            <v-img
              src="https://randomuser.me/api/portraits/men/36.jpg"
              alt="Depoimento hóspede 2"
            />
          </v-avatar>
          <p class="text-body-1 font-italic" style="color: #555;">
            “Lugar acolhedor, atendimento impecável e aquele charme de interior
            com conforto de verdade. A sauna, o silêncio e o céu estrelado...
            inesquecível.”
          </p>
          <strong class="mt-2" style="color: #6b6b6b;">Fernando Lima – RJ</strong>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="d-flex flex-column align-center text-center px-6 mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <v-avatar size="64" class="mb-4">
            <v-img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Depoimento hóspede 3"
            />
          </v-avatar>
          <p class="text-body-1 font-italic" style="color: #555;">
            “Cada momento no Canto das Aves é especial. A combinação de natureza,
            conforto e hospitalidade fez da nossa viagem algo inesquecível.”
          </p>
          <strong class="mt-2" style="color: #6b6b6b;">Ana Paula Mendes – MG</strong>
        </v-col>
      </v-row>
    </v-container>

    <!-- CTA -->
    <v-container class="text-center py-16">
      <v-btn
        color="green darken-2"
        class="white--text"
        large
        rounded
        data-aos="zoom-in"
        data-aos-delay="100"
        @click="goToBooking"
        aria-label="Faça sua reserva agora na Pousada Canto das Aves"
      >
        Faça sua reserva agora
      </v-btn>
    </v-container>

    <!-- Mapa -->
    <v-container class="py-12">
      <h2 class="section-title text-center">Onde estamos</h2>
      <p class="section-subtitle text-center" style="margin-bottom: 2rem;">
        Visite a Pousada Canto das Aves no coração de Visconde de Mauá
      </p>
      <div class="map-wrapper">
        <iframe
          role="region"
          aria-label="Mapa mostrando a localização da Pousada Canto das Aves em Visconde de Mauá"
          src="https://www.google.com/maps?q=Visconde+de+Mauá,+RJ,+Brasil&hl=pt-BR&z=12&output=embed"
          width="100%"
          height="400"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa da Pousada Canto das Aves"
        ></iframe>
      </div>
    </v-container>
  </v-container>
</template>

<script setup>
import FancyImage from '~/components/FancyImage.vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Componente montado')
})

const router = useRouter()
const goToBooking = () => {
  router.push('/reservas')
}

const sections = [
  {
    title: 'Nossa História e Tradição',
    image: '/images/a-pousada/recepcao.jpg',
    alt: 'Vista da pousada com jardim',
    paragraphs: [
      'A Pousada Canto das Aves nasceu do sonho de compartilhar um pedaço de paraíso com quem valoriza o simples, o acolhedor e o essencial. Inspirada pela história rica de Visconde de Mauá e pelo espírito livre de quem fez da região um símbolo de paz e reconexão, nossa pousada carrega em sua essência a harmonia entre natureza e afeto.',
      'Aqui, o tempo passa mais devagar. A lareira aquece os encontros. E o som do rio embala memórias que ficam para sempre.'
    ]
  },
  {
    title: 'A Essência do Canto das Aves',
    image: '/images/a-pousada/aves.jpg',
    alt: 'Vista da pousada, chalé ao fundo com vegetação a frente.',
    paragraphs: [
      'Mais do que um lugar, Canto das Aves é um sentimento: a combinação perfeita entre acolhimento genuíno e contato direto com a natureza. Nosso compromisso é proporcionar momentos de tranquilidade e renovação para cada hóspede.',
      'Com raízes na cultura local, valorizamos as tradições e o estilo de vida de Visconde de Mauá, oferecendo uma experiência autêntica e inesquecível.'
    ]
  },
  {
    title: 'Nossa Estrutura',
    image: '/images/a-pousada/estrutura.jpg',
    alt: 'Área da piscina natural da pousada',
    paragraphs: [
      'Cada canto da Pousada Canto das Aves foi planejado para acolher você com charme e simplicidade. São 15 suítes decoradas com cuidado, lareiras para noites frescas e uma piscina natural para o verão. Espaços para relaxar, uma sauna aconchegante e áreas para os pequenos se divertirem.',
      'Tudo pensado para criar memórias inesquecíveis em meio à natureza, com conforto e hospitalidade genuína.'
    ]
  },
  {
    title: 'Região e Natureza',
    image: '/images/a-pousada/natureza.jpg',
    alt: 'Queda da cachoeira',
    paragraphs: [
      'Visconde de Mauá é um refúgio onde a natureza se revela em sua forma mais pura e encantadora. Entre rios cristalinos, cachoeiras escondidas e montanhas imponentes, cada passo é um convite para se reconectar consigo mesmo e com o mundo ao redor.',
      'A Pousada Canto das Aves está imersa nesse cenário mágico, onde o ar fresco traz a promessa de paz e renovação. Aqui, você pode se perder em trilhas que despertam os sentidos, observar o vai e vem dos pássaros que habitam as matas e se encantar com o espetáculo da fauna e flora local.',
      'É um convite para desacelerar, ouvir o silêncio da floresta e sentir a energia vibrante da terra que acolhe. Tudo isso, a poucos passos do seu quarto, para que sua experiência seja completa e inesquecível.'
    ]
  },
  {
    title: 'Experiência do Hóspede',
    image: '/images/a-pousada/experiencia.jpg',
    alt: 'Ambiente aconchegante da pousada',
    paragraphs: [
      'Na Canto das Aves, cada detalhe é pensado para criar experiências autênticas e inesquecíveis. Desde a recepção acolhedora até o aroma do café recém-passado pela manhã, queremos que você se sinta verdadeiramente em casa — ou melhor, em paz.',
      'Mais do que uma pousada, oferecemos um estado de espírito: aquele em que o aconchego, a simplicidade e a beleza natural se unem para criar memórias que permanecem.'
    ]
  },
  {
    title: 'Localização e Acesso',
    image: '/images/a-pousada/localizacao.jpg',
    alt: 'Estrada entre montanhas e vegetação na região da pousada',
    paragraphs: [
      'Situada na charmosa região de Visconde de Mauá, nossa pousada está cercada por cachoeiras, montanhas e trilhas, num cenário que convida ao descanso e à reconexão com a natureza.',
      'Mesmo com todo esse sossego, chegar até aqui é simples: estamos a poucos quilômetros do centro de Maringá, com acesso por estrada asfaltada. Um caminho bonito, seguro e cheio de boas-vindas.'
    ]
  },
  {
    title: 'Políticas e Cuidados',
    image: '/images/a-pousada/politica.jpg',
    alt: 'Ambiente acolhedor da pousada, com chalé e vegetação ao fundo',
    paragraphs: [
      'Para garantir uma estadia tranquila, adotamos algumas práticas importantes: check-in a partir das 14h e check-out até as 12h.',
      'Aceitamos animais de pequeno porte mediante aviso prévio e cobrança de taxa. Por segurança e respeito a todos, os pets devem estar sempre acompanhados durante a estadia.',
      'Nossa equipe está pronta para atender você com carinho e atenção do início ao fim da sua experiência conosco.'
    ]
  }
]
</script>

<style scoped>
.hero-video-section {
  position: relative;
  height: 50vh;
  min-height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 0 1rem;
  text-shadow: 0 0 15px rgba(165, 214, 167, 0.8);
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

.section-title {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #137a06;
}

.section-paragraph {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #1d440f;
  margin-bottom: 1.25rem;
  text-align: justify;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #6b6b6b;
  margin-bottom: 2rem;
}

.map-wrapper {
  max-width: 900px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>
