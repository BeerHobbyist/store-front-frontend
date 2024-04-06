<script setup lang="ts">
import DisplayItem from './DisplayItem.vue';
import type { Product } from '../products';
defineProps<{ sectionName: string, items: Array<Product> }>();
</script>

<template>
    <div class="flex flex-wrap flex-col">
        <div class="p-4">
            <span class="text-2xl font-sans uppercase border-b border-blue-400 block pb-2">{{ sectionName }}</span>
        </div>
        <div class="flex flex-row justify-start ">
            <DisplayItem v-for="item in items" :key="item.id" :id="item.id" :name="item.name"
                :packageType="item.packageType" :price="item.price" :imageUrl="item.imageUrl" />
        </div>
    </div>
</template>