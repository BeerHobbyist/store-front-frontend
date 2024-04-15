<script setup lang="ts">
import { ref, watch } from 'vue';
import { cartStore } from '../cart';
import { TransitionRoot } from '@headlessui/vue';
const props = defineProps<{ id: string, name?: string, packageType?: string, price: number, imageUrl: string }>();

const selectedAmount = ref(1);
const isOpen = ref(false);

function setIsOpen(value: boolean) {
    isOpen.value = value;
    setTimeout(() => {
        isOpen.value = !value;
    }, 1500);
}

function onAddToCart() {
    cartStore.addToCart(props.id, selectedAmount.value);
    setIsOpen(true);
}

watch(selectedAmount, (newValue: number) => {
    if (newValue < 0) {
        selectedAmount.value = 0;
    }
});

</script>

<template>
    <teleport to="body" >
        <TransitionRoot :show="isOpen"
            appear
            enter="transform transition duration-200"
            enter-from="opacity-0 scale-0" 
            enter-to="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out" 
            leave-from="opacity-100 scale-100 "
            leave-to="opacity-0 scale-0"
            class="fixed bottom-0 right-0 mb-4 mr-4 bg-green-600 shadow-xl rounded-lg p-6 w-auto z-50" >
            <div>
                <h1 class="text-white">Dodano do koszyka</h1>
            </div>
        </TransitionRoot>
    </teleport>
    <div
        class="flex flex-col items-center justify-end bg-white  shadow-lg rounded-lg h-[310px] w-52 m-4 py-2 transition ease-in-out duration-300 hover:shadow-2xl">
        <img class="w-40 my-auto" :src="imageUrl">
        <div class="m-1 text-center">
            <div>{{ props.name }}</div>
            <div>{{ props.packageType }}</div>
            <div>{{ props.price }} zł</div>
        </div>
        <div class="h-14 flex justify-between items-center">
            <input class="border-gray-300 border-solid border rounded-lg text-center w-12 h-9 m-2" name="field"
                type="number" min="0" v-model="selectedAmount">
            <button
                class="w-9 h-9 bg-green-400 transition ease-in-out duration-100 hover:bg-green-500 active:bg-green-700 active:ring-2 ring-green-700 rounded-lg p-2 shadow-lg"
                @click="onAddToCart">
                <img class="m-auto" src="/shopping-cart.svg" alt="shopping cart">
            </button>
        </div>
    </div>
</template>
