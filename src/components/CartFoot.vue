<script setup lang="ts">
import { cartStore } from '@/cart';
import WideButton from './WideButton.vue';
defineProps<{ totalPrice: number, selectedAmount: number }>();
</script>

<template>
    <div class="flex flex-row justify-between p-2 bg-gray-200 items-end">
        <WideButton class="p-1 text-center text-base" @click="cartStore.clearCart">Wyczyść</WideButton>
        <div class="flex flex-col">
            <div class="flex font-sans justify-between p-1 items-center">
                <div class="mr-12">
                    <div class="text-lg">Suma:</div>
                    <div class="text-sm text-gray-500">{{ selectedAmount }} prod.</div>
                </div>
                <div >
                    <div class="text-xl">{{ totalPrice }} zł</div>

                </div>
            </div>
            <WideButton class="p-1 text-center text-base" @click="$router.push('/checkout')">Zamów</WideButton>
        </div>
    </div>
</template>
