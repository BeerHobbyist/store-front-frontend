<script setup lang="ts">
import { cartStore } from '@/cart';
import WideButton from './WideButton.vue';
defineProps<{ totalPrice: number }>();
</script>

<template>
    <div class="flex flex-row justify-between p-2 bg-gray-200 items-center">
        <WideButton @click="cartStore.clearCart">Clear cart</WideButton>
        <WideButton @click="$router.push('/checkout')">Checkout</WideButton>
        <div>
            <div class="font-sans font-semibold tracking-tight text-base bg-gray-500 rounded-lg p-4 shadow-lg text-white">
                {{ totalPrice }} zł
            </div>
        </div>
    </div>
</template>
