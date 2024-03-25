<script setup lang="ts">
import { cartStore } from '@/cart';
import { productsStore } from '@/products';

const getName = (id: number) => {
    return productsStore.products.find((product) => product.id === id)?.productName;
};

</script>

<template>
    <h1>Cart:</h1>
    <ul>
        <li v-for="item in cartStore.cartItems" :key="item.id">
            <p>{{ getName(item.id) }}: {{ item.count }}</p>
            <p></p>
        </li>
    </ul>
</template>