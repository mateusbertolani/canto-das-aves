<template>
  <section class="category-section">
    <CategoryTitle :title="title" :image="molduraImage" />

    <v-card
      v-for="suite in suites"
      :key="suite.name"
      class="room-card"
      elevation="4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >

      <v-row>
        <!-- Carrosel -->
        <v-col cols="12" md="6">
          <v-carousel
            hide-delimiter-background
            height="350"
            class="room-carousel"
            cycle
            interval="3500"
          >
            <v-carousel-item
              v-for="n in 7"
              :key="n"
              class="carousel-slide"
            >
              <v-img
                :src="`${suite.imagePrefix}${n}.jpg`"
                class="carousel-image-proper"
                cover
              />
            </v-carousel-item>
          </v-carousel>
        </v-col> 

        <!-- Informações -->
        <v-col cols="12" md="6" class="room-info">
          <h3 class="room-title">{{ suite.name }}</h3>
          <p class="room-description">{{ suite.description }}</p>

          <div class="features-icons">
            <v-icon v-for="(icon, index) in suite.icons" :key="index" size="30">
              {{ icon }}
            </v-icon>
          </div>

          <v-btn
            color="success"
            variant="elevated"
            class="reserve-button"
            :href="suite.reserveLink"
            target="_blank"
          >
            Reservar Agora
          </v-btn>
        </v-col>

      </v-row>
    </v-card>
  </section>
</template>

<script setup>
import CategoryTitle from './CategoryTitle.vue';

defineProps({
  title: String,
  molduraImage: String,
  suites: Array
})
</script>

<style scoped>

.room-card {
  max-width: 900px;
  margin: 60px auto 80px auto; /* Aumenta o espaçamento inferior */
  border-radius: 20px;
  background-color: #f3f7f3;
  border: 2px solid #2e7d32;
  padding: 20px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.room-card + .room-card {
  margin-top: 80px;
}

.room-card .v-row {
  flex-wrap: nowrap;
}

@media (max-width: 768px) {
  .room-card .v-row {
    flex-wrap: wrap;
  }
}

.room-card .v-col {
  flex: 1 1 50%;
  max-width: 50%;
}

@media (max-width: 768px) {
  .room-card .v-col {
    max-width: 100%;
  }
}

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

.room-carousel {
  border-radius: 24px;
  overflow: hidden;
  position: relative;
}

.carousel-image-proper {
  border-radius: 24px;
  object-fit: cover;
  width: 100%;
  height: 350px;
  transition: transform 0.5s ease;
}

.carousel-slide:hover .carousel-image-proper {
  transform: scale(1.03);
}

.features-icons {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}

.features-icons .v-icon {
  color: #2e7d32;
}

.reserve-button {
  align-self: flex-start;
  font-weight: bold;
}

</style>
