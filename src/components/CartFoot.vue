<script setup lang="ts">
import { cartStore } from '@/cart';
import WideButton from './WideButton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { TransitionRoot } from '@headlessui/vue';
import PopupNotification from './PopupNotification.vue';

defineProps<{ totalPrice: number, selectedAmount: number }>();

const router = useRouter();
const isOpen = ref(false);

function setIsOpen(value: boolean) {
    isOpen.value = value;
    setTimeout(() => {
        isOpen.value = !value;
    }, 1500);
}

function onSubmitCart() {
    if (cartStore.cartItems.length === 0) {
        setIsOpen(true);
    } else {
        router.push('/checkout');
    }
}

</script>

<template>
    <teleport to="body">
        <PopupNotification :is-open="isOpen" bg-color="bg-red-500" text-color="text-white">
            Koszyk jest pusty
        </PopupNotification>
    </teleport>
    <div class="flex flex-row justify-between p-2 bg-gray-200 items-end">
        <WideButton class="p-1 text-center text-base" @click="cartStore.clearCart">Wyczyść</WideButton>
        <div class="flex flex-col">
            <div class="flex font-sans justify-between p-1 items-center">
                <div class="mr-12">
                    <div class="text-lg">Suma:</div>
                    <div class="text-sm text-gray-500">{{ selectedAmount }} prod.</div>
                </div>
                <div>
                    <div class="text-xl">{{ totalPrice }} zł</div>
                </div>
            </div>
            <WideButton class="p-1 text-center text-base" @click="onSubmitCart()">Zamów</WideButton>
        </div>
    </div>
</template>
