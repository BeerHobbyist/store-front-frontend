<script setup lang="ts">
import { cartStore } from '@/cart';
import { productsStore } from '@/products';
import CartItem from '../components/CartItem.vue'

const getName = (id: number) => {
    return productsStore.products.find((product) => product.id === id)?.productName;
};

</script>

<template>
    <h1>Cart:</h1>
    <div class="itemList">
        <CartItem v-for="item in cartStore.cartItems" :key="item.id" :selectedAmount="item.count" :name="getName(item.id)" />
    </div>
</template>

<style scoped>
.itemList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    border: 2px solid #000;
    padding: 10px; 
    margin: 10px;
    width: 50%;
}
</style>