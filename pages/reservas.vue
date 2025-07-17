<template>
  <div class="reserva-video-container">
    <video autoplay muted loop playsinline class="video-fundo">
      <source src="/videos/hero-reserva.mp4" type="video/mp4" />
      Seu navegador não suporta vídeo.
    </video>
    <div class="overlay"></div>

    <v-container fluid class="reserva-conteudo">
      <section class="hero-text text-center">
        <h1>Reserve sua experiência na natureza</h1>
        <p>Preencha o formulário e entraremos em contato para confirmar.</p>
      </section>

      <v-form v-model="valid" class="formulario-sobre-video" @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Nome completo"
              v-model="form.nome"
              color="white"
              variant="underlined"
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="E-mail"
              v-model="form.email"
              color="white"
              variant="underlined"
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Telefone / WhatsApp"
              v-model="form.telefone"
              color="white"
              variant="underlined"
              required
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              label="Data de entrada"
              v-model="form.checkin"
              color="white"
              variant="underlined"
              required
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              label="Data de saída"
              v-model="form.checkout"
              color="white"
              variant="underlined"
              required
            />
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              label="Adultos"
              type="number"
              v-model="form.adultos"
              color="white"
              variant="underlined"
              min="1"
              required
            />
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              label="Crianças"
              type="number"
              v-model="form.criancas"
              color="white"
              variant="underlined"
              min="0"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              label="Tipo de acomodação"
              v-model="form.acomodacao"
              :items="acomodacoes"
              color="white"
              variant="underlined"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              label="Observações"
              v-model="form.observacoes"
              color="white"
              variant="underlined"
              rows="3"
            />
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn
              type="submit"
              class="botao-reserva"
              large
            >
              Solicitar Reserva
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<style scoped>
.reserva-video-container {
  position: relative;
  overflow: hidden;
  color: white;
  padding-top: 80px; /* espaço para o header fixo */
  min-height: calc(100vh - 100px); /* ocupa a tela, menos footer (aprox) */
  background: black;
}

.video-fundo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.45);
  z-index: 1;
}

.reserva-conteudo {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

.hero-text {
  text-align: center;
  margin-bottom: 24px;
}

.hero-text h1 {
  font-size: 2.8rem;
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

.hero-text p {
  font-size: 1.3rem;
  font-weight: 300;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
}

.formulario-sobre-video {
  background: rgba(0, 0, 0, 0.25);
  padding: 24px 28px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  color: white;
}

.v-input__control {
  color: white !important;
}

.v-label {
  color: rgba(255, 255, 255, 0.8) !important;
  font-weight: 500;
}

.v-textarea textarea {
  color: white !important;
}

.botao-reserva {
  background: linear-gradient(to right, #2f9e44, #43b749);
  color: white;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(43, 115, 30, 0.7);
  transition: filter 0.3s ease;
}

.botao-reserva:hover {
  filter: brightness(1.1);
}
</style>

<script setup>
import { ref } from 'vue'

// Estado do formulário
const valid = ref(false)

const form = ref({
  nome: '',
  email: '',
  telefone: '',
  checkin: '',
  checkout: '',
  adultos: 1,
  criancas: 0,
  acomodacao: '',
  observacoes: ''
})

// Lista de acomodações (adicione as que quiser)
const acomodacoes = [
  'Suíte Beija-Flor',
  'Cabana dos Tucanos',
  'Quarto Miquinhos',
  'Refúgio da Serra',
  'Encanto da Mata',
  'Chalé das Bromélias'
]

function submitForm() {
  console.log('Formulário enviado:', form.value)

  alert('Solicitação de reserva enviada com sucesso!\nEntraremos em contato em breve.')

  // Reset opcional do formulário
  form.value = {
    nome: '',
    email: '',
    telefone: '',
    checkin: '',
    checkout: '',
    adultos: 1,
    criancas: 0,
    acomodacao: '',
    observacoes: ''
  }
}
</script>
