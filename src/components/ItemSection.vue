<script setup lang="ts">
import DisplayItem from './DisplayItem.vue';
import type { Product } from '../products';
defineProps<{ sectionName: string, items: Array<Product> }>();
</script>

<template>
    <div class="item-section">
        <div class="section-header">
            <span class="header-text">{{ sectionName }}</span>
        </div>
        <div class="item-display">
            <DisplayItem v-for="item in items" :key="item.id" :id="item.id" :name="item.name"
                :packageType="item.packageType" :price="item.price" :imageUrl="item.imageUrl" />
        </div>
    </div>
</template>

<style scoped>
.section-header {
    padding: 20px 10px 10px 20px;
}

.header-text {
    font-size: 1.5em;
    color: #333;
    text-transform: uppercase;
    border-bottom: 1px solid var(--accent-color);
    padding-bottom: 10px;
    display: inline-block;
    width: 100%;
}

.item-display {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>