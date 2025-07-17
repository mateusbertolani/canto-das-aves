<template>
  <section class="turismo-grid-section">
    <div class="grid-container">
      <div class="cards-container">
        <slot name="cards" />
      </div>
      <div class="textos-container">
        <slot name="textos" />
      </div>
    </div>
  </section>
</template>

<script setup>
// Componente simples, usa slots para flexibilidade.
</script>

<style scoped>
.turismo-grid-section {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.grid-container {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.cards-container {
  flex: 1 1 400px;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.textos-container {
  flex: 1 1 300px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
}

@media (max-width: 900px) {
  .grid-container {
    flex-direction: column;
    align-items: center;
  }
  .cards-container,
  .textos-container {
    max-width: 100%;
    flex: none;
  }
}
</style>
