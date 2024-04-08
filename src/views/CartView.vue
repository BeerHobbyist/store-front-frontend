<script setup lang="ts">
import { cartStore } from '@/cart';
import { productsStore } from '@/products';
import CartFoot from '../components/CartFoot.vue'
import CartItem from '../components/CartItem.vue'
import { computed } from 'vue';

const getName = (id: string) => {
    return productsStore.products.find((product) => product.id === id)?.name;
};

const getPrice = (id: string): number => {
    return productsStore.products.find((product) => product.id === id)?.price ?? 0;
};

const totalPrice = computed(() => {
    return cartStore.cartItems.reduce((acc, item) => {
        const productPrice = productsStore.products.find(product => product.id === item.id)?.price ?? 0;
        return acc + productPrice * item.count;
    }, 0);

});

const updateSelectedAmount = (id: string, amount: number) => {
    cartStore.updateAmount(id, amount);
};

</script>

<template>
    <div class="m-auto mt-5 w-2/3 bg-blue-400 rounded-md overflow-hidden shadow-2xl">
        <table class="w-full border-separate border-spacing-0 overflow-hidden rounded-none">
            <thead>
                <tr>
                    <th class="table-header">Product</th>
                    <th class="table-header">Price</th>
                    <th class="table-header">Amount</th>
                </tr>
            </thead>
            <tbody>
                <CartItem v-for="item in cartStore.cartItems" :key="item.id" :name="getName(item.id)"
                    :selectedAmount="item.count" :price="Number((getPrice(item.id) * item.count).toFixed(2))"
                    :id="item.id" @amountChanged="updateSelectedAmount" />
            </tbody>

        </table>
        <CartFoot :totalPrice="Number(totalPrice.toFixed(2))" />
    </div>
</template>

<style scoped>

.table-header {
    @apply bg-blue-400 text-white font-sans font-semibold tracking-tight text-left pl-1;
}
</style>
