<template>
  <v-container fluid class="pa-0" style="background-color: #f4f1ec;">
    <!-- Título da Seção -->
    <SelectionHeader
      title="Onde o aconchego encontra a natureza"
      subtitle="Conheça nossa história, estrutura e tudo que torna a Santa Clara tão especial."
      image="https://www.pousadasantaclaramaua.com.br/images/fotogaleria2.jpg"
    />

    <!-- Dados das seções -->
    <template v-for="(section, index) in sections" :key="index">
      <v-container
        :style="`background-color: ${getBackgroundColor(index)};`"
        class="py-14 px-4 px-md-12"
        data-aos="fade-up"
      >

        <v-row align="center" class="mb-md-8">
          <!-- Alternância de layout com ordenação -->
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
            <SectionTitle
              :title="section.title"
              :subtitle="section.subtitle"
              align="left"
            />
            <p
              v-for="(p, i) in section.paragraphs"
              :key="i"
              class="text-body-1 mb-4"
              style="text-align: justify; hyphens: auto; color:#4a4a4a"
            >
              {{ p }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </template>

    <!-- Seção 8 - Depoimentos -->
    <v-container class="pt-12 pb-16" style="background-color: #f9f9f7;">
      <v-row class="mb-8">
        <v-col cols="12" class="text-center">
          <SectionTitle
            title="O que dizem nossos hóspedes"
            subtitle="Experiências reais, memórias verdadeiras"
            align="center"
          />
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
            <v-img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Depoimento hóspede 1" />
          </v-avatar>
          <p class="text-body-1 font-italic" style="color: #555;">
            “Um pedacinho do paraíso! Acordar com o som do rio, tomar um café incrível e sentir a paz do lugar foi mágico. Voltaremos com certeza!”
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
            <v-img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Depoimento hóspede 2" />
          </v-avatar>
          <p class="text-body-1 font-italic" style="color: #555;">
            “Lugar acolhedor, atendimento impecável e aquele charme de interior com conforto de verdade. A sauna, o silêncio e o céu estrelado... inesquecível.”
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
            <v-img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Depoimento hóspede 3" />
          </v-avatar>
          <p class="text-body-1 font-italic" style="color: #555;">
            “Cada momento na Santa Clara é especial. A combinação de natureza, conforto e hospitalidade fez da nossa viagem algo inesquecível.”
          </p>
          <strong class="mt-2" style="color: #6b6b6b;">Ana Paula Mendes – MG</strong>
        </v-col>
      </v-row>
    </v-container>

    <!-- CTA - Chamada para ação -->
    <v-container class="text-center py-16" style="background-color: #e8f5e9;">
      <v-btn
        color="green darken-2"
        class="white--text"
        large
        rounded
        data-aos="zoom-in"
        data-aos-delay="100"
        @click="goToBooking"
        aria-label="Faça sua reserva agora na Pousada Santa Clara"
      >
        Faça sua reserva agora
      </v-btn>
    </v-container>

    <!-- Mapa -->
    <v-container class="py-12" style="background-color: #f4f1ec;">
      <SectionTitle
        title="Onde estamos"
        subtitle="Visite a Pousada Santa Clara no coração de Visconde de Mauá"
        align="center"
      />
      <div class="map-wrapper">
        <iframe
          role="region"
          aria-label="Mapa mostrando a localização da Pousada Santa Clara em Visconde de Mauá"
          src="https://www.google.com/maps?q=Visconde+de+Mauá,+RJ,+Brasil&hl=pt-BR&z=12&output=embed"
          width="100%"
          height="400"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa da Pousada Santa Clara"
        ></iframe>
      </div>
    </v-container>
  </v-container>
</template>


<script setup>

import SelectionHeader from '~/components/SelectionHeader.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import FancyImage from '~/components/FancyImage.vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Componente montado')
})

const router = useRouter()

const goToBooking = () => {
  // ajuste essa rota para onde estiver a página de reservas no seu site
  router.push('/reservas') 
}

const sections = [
  {
    title: 'Nossa História e Tradição',
    subtitle: 'Uma pequena descrição inspiradora aqui.',
    image: 'https://www.pousadasantaclaramaua.com.br/images/fotogaleria1.jpg',
    alt: 'Vista da pousada com jardim',
    paragraphs: [
      'A Pousada Santa Clara nasceu do sonho de compartilhar um pedaço de paraíso com quem valoriza o simples, o acolhedor e o essencial. Inspirada pela história rica de Visconde de Mauá e pelo espírito livre de quem fez da região um símbolo de paz e reconexão, nossa pousada carrega em sua essência a harmonia entre natureza e afeto.',
      'Aqui, o tempo passa mais devagar. A lareira aquece os encontros. E o som do rio embala memórias que ficam para sempre.'
    ]
  },
  {
    title: 'A Essência da Santa Clara',
    subtitle: 'Inspirados pela rica cultura e espírito acolhedor de Visconde de Mauá',
    image: 'https://www.pousadasantaclaramaua.com.br/images/fotogaleria17.jpg',
    alt: 'Vista da pousada, chalé ao fundo com vegetação a frente.',
    paragraphs: [
      'Mais do que um lugar, a Santa Clara é um sentimento: a combinação perfeita entre acolhimento genuíno e contato direto com a natureza. Nosso compromisso é proporcionar momentos de tranquilidade e renovação para cada hóspede.',
    'Com raízes na cultura local, valorizamos as tradições e o estilo de vida de Visconde de Mauá, oferecendo uma experiência autêntica e inesquecível.'
    ]
  },
  {
    title: 'Nossa Estrutura',
    subtitle: 'Conforto e Natureza em perfeita harmonia',
    image: 'https://www.pousadasantaclaramaua.com.br/images/fotoapousada4.jpg',
    alt: 'Área da piscina natural da pousada',
    paragraphs: [
      'Cada canto da Pousada Santa Clara foi planejado para acolher você com charme e simplicidade. São 15 suítes decoradas com cuidado, lareiras para noites frescas e uma piscina natural para o verão. Espaços para relaxar, uma sauna aconchegante e áreas para os pequenos se divertirem.',
      'Tudo pensado para criar memórias inesquecíveis em meio à natureza, com conforto e hospitalidade genuína.'
    ]
  },
  {
    title: 'Região e Natureza',
    subtitle: 'Um refúgio onde a natureza inspira cada momento',
    image: 'http://pousadasantaclaramaua.com.br/images/fotogaleria14.jpg',
    alt: 'Queda da cachoeira',
    paragraphs: [
      'Visconde de Mauá é um refúgio onde a natureza se revela em sua forma mais pura e encantadora. Entre rios cristalinos, cachoeiras escondidas e montanhas imponentes, cada passo é um convite para se reconectar consigo mesmo e com o mundo ao redor.',
      'A Pousada Santa Clara está imersa nesse cenário mágico, onde o ar fresco traz a promessa de paz e renovação. Aqui, você pode se perder em trilhas que despertam os sentidos, observar o vai e vem dos pássaros que habitam as matas e se encantar com o espetáculo da fauna e flora local.',
      'É um convite para desacelerar, ouvir o silêncio da floresta e sentir a energia vibrante da terra que acolhe. Tudo isso, a poucos passos do seu quarto, para que sua experiência seja completa e inesquecível.'
    ]
  },
  {
    title: 'Experiência do Hóspede',
    subtitle: 'Momentos que ficam na memória, sentimentos que aquecem o coração',
    image: 'https://www.pousadasantaclaramaua.com.br/images/fotoapousada13.jpg',
    alt: 'Ambiente aconchegante da pousada',
    paragraphs: [
      'Na Santa Clara, cada detalhe é pensado para criar experiências autênticas e inesquecíveis. Desde a recepção acolhedora até o aroma do café recém-passado pela manhã, queremos que você se sinta verdadeiramente em casa — ou melhor, em paz.',
      'Mais do que uma pousada, oferecemos um estado de espírito: aquele em que o aconchego, a simplicidade e a beleza natural se unem para criar memórias que permanecem.'
    ]
  },
  {
    title: 'Localização e Acesso',
    subtitle: 'Um refúgio de natureza, facilmente ao seu alcance',
    image: 'https://www.pousadasantaclaramaua.com.br/images/fotoapousada6.jpg',
    alt: 'Estrada entre montanhas e vegetação na região da pousada',
    paragraphs: [
      'Situada na charmosa região de Visconde de Mauá, nossa pousada está cercada por cachoeiras, montanhas e trilhas, num cenário que convida ao descanso e à reconexão com a natureza.',
      'Mesmo com todo esse sossego, chegar até aqui é simples: estamos a poucos quilômetros do centro de Maringá, com acesso por estrada asfaltada. Um caminho bonito, seguro e cheio de boas-vindas.'
    ]
  },
  {
    title: 'Políticas e Cuidados',
    subtitle: 'Cuidamos dos detalhes para sua experiência ser tranquila e segura',
    image: 'https://www.pousadasantaclaramaua.com.br/images/fotoapousada11.jpg',
    alt: 'Ambiente acolhedor da pousada, com chalé e vegetação ao fundo',
    paragraphs: [
      'Para garantir uma estadia agradável a todos, adotamos algumas práticas importantes. Check-in a partir das 14h e check-out até as 12h.',
      'Na Santa Clara, acreditamos que os momentos especiais merecem ser compartilhados com toda a família — inclusive os de quatro patas! Aceitamos animais de pequeno porte, mediante aviso prévio no ato da reserva.',
      'É cobrada uma taxa de 5% por animal, sendo permitido o máximo de 2 pets por acomodação. Por segurança e respeito a todos os hóspedes, os animais devem permanecer sempre acompanhados por seus tutores durante a estadia.',
      'Nossa equipe está sempre pronta para orientar você com carinho e atenção, desde o momento da reserva até o seu retorno para casa.'
    ]
  }
]

const lightBg = '#f7f4ee'  // bege claro, atual
const strongBg = '#cfe0cf' // verde acinzentado suave, elegante e natural

const getBackgroundColor = (index) => {
  return Math.floor(index / 2) % 2 === 0 ? lightBg : strongBg
}

</script>

<style scoped>
.map-wrapper {
  max-width: 900px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>
