<script setup lang="ts">
import DisplayItem from './DisplayItem.vue';
import type { Product } from '../products';
defineProps<{ sectionName: string, items: Array<Product> }>();
</script>

<template>
    <div class="flex flex-wrap flex-col items-center" v-motion-slide-visible-once-bottom>
        <div class="p-4 w-6/12">
            <span class="text-2xl font-sans uppercase border-b border-blue-400 block pb-2">{{ sectionName }}</span>
        </div>
        <div
            class="flex flex-row flex-wrap justify-center sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-4xl 2xl:max-w-7xl">
            <DisplayItem v-for="item in items" :key="item.id" :id="item.id" :name="item.name"
                :packageType="item.packageType" :price="item.price" :imageUrl="item.imageUrl" />
        </div>
    </div>
</template>