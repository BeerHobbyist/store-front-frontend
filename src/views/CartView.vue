<script setup lang="ts">
import { cartStore } from '@/cart';
import { productsStore } from '@/products';
import CartFoot from '../components/CartFoot.vue'
import CartItem from '../components/CartItem.vue'
import { computed } from 'vue';
import type { Product } from '@/products';


const totalPrice = computed(() => {
    return cartStore.cartItems.reduce((acc, item) => {
        const productPrice = productsStore.products.find((product: Product) => product.id === item.id)?.price ?? 0;
        return acc + productPrice * item.count;
    }, 0);

});

const getProduct = (id: string): Product | undefined => {
    return productsStore.products.find((product: Product) => product.id === id);
};

const updateSelectedAmount = (id: string, amount: number) => {
    cartStore.updateAmount(id, amount);
};

const totalSelectedAmount = computed(() => {
    return cartStore.cartItems.reduce((acc, item) => {
        return acc + item.count;
    }, 0);
});

</script>

<template>
    <div class="m-auto my-20 w-2/3 rounded-md overflow-hidden shadow-2xl mt-16" v-motion-slide-visible-once-bottom>
        <table class="w-full border-separate border-spacing-0 overflow-hidden rounded-none">
            <thead>
                <tr>
                    <th class="table-header border-r border-gray-200 border-b">Produkt</th>
                    <th class="table-header border-r border-gray-200 border-b">Cena</th>
                    <th class="table-header border-gray-200 border-b">Ilość</th>
                </tr>
            </thead>
            <tbody>
                <CartItem v-for="item in cartStore.cartItems" :key="item.id" :name="getProduct(item.id)?.name"
                    :selectedAmount="item.count"
                    :total-price="Number(((getProduct(item.id)?.price ?? 0) * item.count).toFixed(2))" :id="item.id"
                    :package-type="getProduct(item.id)?.packageType ?? 'not found'"
                    :itemPrice="getProduct(item.id)?.price ?? 0" :image-url="getProduct(item.id)?.imageUrl ?? 'no image'" @amountChanged="updateSelectedAmount" />
            </tbody>

        </table>
        <CartFoot :totalPrice="Number(totalPrice.toFixed(2))" :selected-amount="totalSelectedAmount"/>
    </div>
</template>

<style scoped>
.table-header {
    @apply bg-white text-blue-400 font-sans font-semibold tracking-tight text-left pl-2 text-xl;
}
</style>
