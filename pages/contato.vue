<template>
  <div class="contato-video-fundo">
    <video autoplay muted loop playsinline class="video-fundo">
      <source src="/videos/hero-contato.mp4" type="video/mp4" />
      Seu navegador não suporta vídeo.
    </video>
    <div class="overlay"></div>

    <v-container fluid class="contato-conteudo">
      <section class="hero-text text-center">
        <h1>Fale com a gente</h1>
        <p>Estamos aqui para ajudar você. Envie sua mensagem!</p>
      </section>

      <v-form v-model="valid" class="formulario-sobre-video" @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="Nome completo" v-model="form.nome" color="white" variant="underlined" required />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="E-mail" v-model="form.email" color="white" variant="underlined" required />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Telefone / WhatsApp" v-model="form.telefone" color="white" variant="underlined" />
          </v-col>
          <v-col cols="12">
            <v-textarea label="Mensagem" v-model="form.observacoes" color="white" variant="underlined" rows="5" required />
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn type="submit" class="botao-reserva" large>Enviar Mensagem</v-btn>
          </v-col>
        </v-row>
      </v-form>

      <BaseSection class="infos-contato" data-aos="fade-up" data-aos-delay="200">
        <p>Prefere contato rápido? Use nosso WhatsApp no canto da tela, estamos prontos para ajudar você!</p>
      </BaseSection>

      <!-- Opcional: mapa -->
      <BaseSection class="mapa-contato" data-aos="fade-up" data-aos-delay="300">
        <iframe
          src="https://www.google.com/maps?q=Visconde+de+Mauá,+RJ,+Brasil&hl=pt-BR&z=12&output=embed"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </BaseSection>
    </v-container>
  </div>
</template>

<style scoped>
.contato-video-fundo {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  color: white;
  padding-top: 80px; /* ajuste para o header fixo */
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
  background: rgba(0, 0, 0, 0.45);
  z-index: 1;
}

.contato-conteudo {
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
  margin-bottom: 40px;
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

.infos-contato {
  background: transparent !important;
  box-shadow: none !important;
  padding: 0 !important;
  margin-top: 20px;
  color: #ddd;
  text-align: center;
  font-style: italic;
  font-size: 1.1rem;
}

.mapa-contato {
  background: transparent !important;
  box-shadow: none !important;
  padding: 0 !important;
  margin-top: 0 !important;
}

.mapa-contato iframe {
  border-radius: 14px;
  filter: brightness(0.8) contrast(0.9);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
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
  observacoes: ''
})

function submitForm() {
  console.log('Mensagem enviada:', form.value)

  alert('Mensagem enviada com sucesso!\nObrigado pelo contato.')

  // Reset opcional do formulário
  form.value = {
    nome: '',
    email: '',
    telefone: '',
    observacoes: ''
  }
}
</script>
