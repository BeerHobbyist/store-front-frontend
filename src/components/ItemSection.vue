<script setup lang="ts">
import DisplayItem from './DisplayItem.vue';
import type { Product } from '../products';
defineProps<{ sectionName: string, items: Array<Product> }>();
</script>

<template>
    <div :id="sectionName" class="flex flex-wrap flex-col items-center px-10" v-motion-fade-visible>
        <div class="px-4 w-8/12 mt-6 mb-2">
            <h2
                class=" text-lg sm:text-2xl font-bold uppercase bg-white rounded-full shadow-lg block text-center text-blue-400">
                {{ sectionName }}
            </h2>
        </div>
        <div class="flex flex-row flex-wrap justify-center">
            <DisplayItem v-for="item in items" :key="item.id" :id="item.id" :name="item.name"
                :packageType="item.packageType" :price="item.price" :imageUrl="item.imageUrl" :disabled="item.disabled" />
        </div>
    </div>
</template>