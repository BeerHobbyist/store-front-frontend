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
    <div class="sm:mx-auto my-20 max-w-4xl w-full rounded-md overflow-hidden shadow-2xl sm:mt-16 mt-0">
        <!-- Desktop Table -->
        <div class="hidden sm:block">
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
                        :itemPrice="getProduct(item.id)?.price ?? 0"
                        :image-url="getProduct(item.id)?.imageUrl ?? 'no image'"
                        @amountChanged="updateSelectedAmount" />
                </tbody>
            </table>
            <CartFoot :totalPrice="Number(totalPrice.toFixed(2))" :selected-amount="totalSelectedAmount" />
        </div>

        <!-- Mobile View -->
        <div class="sm:hidden">
            <div v-for="item in cartStore.cartItems" :key="item.id" class="p-4 border-b flex justify-between">
                <div>
                    <div class="text-gray-800 font-semibold">{{ getProduct(item.id)?.name }}</div>
                    <div class="text-sm my-1 text-gray-600">Cena: {{ getProduct(item.id)?.price }} zł</div>
                    <div class="text-sm text-gray-600">{{ getProduct(item.id)?.packageType ?? 'not found' }}</div>
                </div>
                <div class=" flex items-center justify-center">
                    <button @click="updateSelectedAmount(item.id, item.count - 1)"
                        class="p-1 border rounded-lg bg-white shadow-md active:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                        </svg>

                    </button>
                    <input type="number" class="text-center w-12 h-7 ml-2 border rounded-lg bg-white shadow-md"
                        v-model="item.count">
                    <button @click="updateSelectedAmount(item.id, item.count + 1)"
                        class="p-1 border rounded-lg ml-2 bg-white shadow-md active:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    </button>
                </div>
            </div>
            <CartFoot :totalPrice="Number(totalPrice.toFixed(2))" :selected-amount="totalSelectedAmount" />
        </div>


    </div>
</template>

<style scoped>
.table-header {
    @apply bg-white text-blue-400 font-sans font-semibold tracking-tight text-left pl-2 text-xl;
}
</style>
