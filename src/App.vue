<script setup lang="ts">
import { onMounted } from 'vue';
import AppBar from './components/AppBar.vue'
import { productsStore } from './products';


onMounted(() => {
    productsStore.fetchProducts();
});
</script>

<template>
  <AppBar />
  <RouterView />
</template>


