<script setup lang="ts">
import { categoriesStore } from '../products'
import ItemSection from '../components/ItemSection.vue'
</script>

<template>
    <div v-for="category in categoriesStore.categories">
        <ItemSection :sectionName="category.name" :items="category.products" />
    </div>
</template>

