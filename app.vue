<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import 'aos/dist/aos.css';
import AOS from 'aos';
import { onMounted } from 'vue';

onMounted(() => { AOS.init(); });

</script>