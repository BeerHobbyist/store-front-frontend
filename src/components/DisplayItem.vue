<script setup lang="ts">
import { ref, watch } from 'vue';
import { cartStore } from '../cart';
import { TransitionRoot, Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue';

const props = defineProps<{ id: string, name?: string, packageType?: string, price: number, imageUrl: string }>();

const selectedAmount = ref(1);
const isOpen = ref(false);
const isImgClicked = ref(false);

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

function handleImgClick() {
    isImgClicked.value = !isImgClicked.value;
}

watch(selectedAmount, (newValue: number) => {
    if (newValue < 0) {
        selectedAmount.value = 0;
    }
});

</script>

<template>
    <Dialog :open="isImgClicked" @close="handleImgClick" class="fixed z-40 inset-0 flex items-center justify-center p-4">
        <div v-show="isImgClicked" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        <DialogPanel class="max-w-4xl mx-auto bg-white rounded shadow-lg p-6 z-50">
            <img :src="props.imageUrl" alt="product image" class="w-[100vw] object-cover rounded-lg ">
        </DialogPanel>
    </Dialog>
    <teleport to="body">
        <TransitionRoot :show="isOpen" appear enter="transform transition duration-200" enter-from="opacity-0 scale-0"
            enter-to="opacity-100 scale-100" leave="transform duration-200 transition ease-in-out"
            leave-from="opacity-100 scale-100 " leave-to="opacity-0 scale-0"
            class="fixed bottom-0 right-0 mb-4 mr-4 bg-green-400 shadow-xl rounded-lg p-6 w-auto z-50">
            <div>
                <h1 class="text-white">Dodano do koszyka</h1>
            </div>
        </TransitionRoot>
    </teleport>
    <div
        class="flex flex-col items-center justify-end bg-white  shadow-lg rounded-lg h-[310px] w-52 m-4 py-2 transition ease-in-out duration-300 hover:shadow-2xl">
        <img class="w-40 my-auto hover:cursor-pointer" :src="imageUrl" @click="handleImgClick">
        <div class="m-1 text-center">
            <div>{{ props.name }}</div>
            <div>{{ props.packageType }}</div>
            <div>{{ props.price }} zł</div>
        </div>
        <div class="h-14 flex justify-between items-center">
            <input class="border-gray-300 border-solid border rounded-lg text-center w-12 h-9 m-2" name="field"
                type="number" min="0" v-model="selectedAmount">
            <button
                class="w-9 h-9 bg-blue-400 transition ease-in-out duration-100 hover:bg-blue-500 active:bg-blue-700 active:ring-2 ring-blue-700 rounded-lg p-2 shadow-lg"
                @click="onAddToCart">
                <img class="m-auto" src="/shopping-cart.svg" alt="shopping cart">
            </button>
        </div>
    </div>
</template>
