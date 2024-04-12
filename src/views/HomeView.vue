<script setup lang="ts">
import { categoriesStore, productsStore } from '../products'
import ItemSection from '../components/ItemSection.vue'
</script>

<template>
    <div v-if="productsStore.isLoading" class="flex items-center justify-center mt-40 transform scale-[2.5]">
        <img class="animate-spin" src="/public/loading.svg" alt="Loading" />
    </div>
    <div v-else v-for="category in categoriesStore.categories" :key="category.name">
        <ItemSection :sectionName="category.name" :items="category.products" />
    </div>
</template>

