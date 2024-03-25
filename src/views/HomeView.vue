<script setup lang="ts">
import AppBar from '../components/AppBar.vue'
import DisplayItem from '../components/DisplayItem.vue'
import { productsStore } from '../products'
import { onMounted } from 'vue'


onMounted(async () => {
  productsStore.fetchProducts();
});

</script>

<template>
  <div class="item-display">
    <DisplayItem v-for="product in productsStore.products" :key="product.id" :id="product.id" :name="product.productName" :packageType="product.packagingType" />
  </div>
</template>

<style scoped>
.item-display {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>
