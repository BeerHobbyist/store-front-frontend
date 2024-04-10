<script setup lang="ts">
import { onMounted } from 'vue';
import AppBar from './components/AppBar.vue'
import { productsStore } from './products';


onMounted(async () => {
    await productsStore.fetchProducts();
    productsStore.populateCategories();
});

</script>

<template>
  <AppBar />
  <RouterView />
</template>


