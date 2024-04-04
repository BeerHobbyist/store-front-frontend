<script setup lang="ts">
import DisplayItem from '../components/DisplayItem.vue'
import { productsStore } from '../products'
import { onMounted } from 'vue'


</script>

<template>
    <div class="item-display">
        <DisplayItem v-for="product in productsStore.products" :key="product.id" :id="product.id"
            :name="product.name" :packageType="product.packageType" :price="product.price"/>
    </div>
</template>

<style scoped>
.item-display {
    background-color: var(--neutral-gray);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}
</style>
