<script setup lang="ts">
import { ref, watch } from 'vue';
import { cartStore } from '../cart';

const props = defineProps<{ id: string, name?: string, packageType?: string, price: number, imageUrl: string }>();

const selectedAmount = ref(1);

watch(selectedAmount, (newValue: number) => {
    if (newValue < 0) {
        selectedAmount.value = 0;
    }
});

</script>

<template>
    <div v-motion-slide-visible-once-bottom
        class="flex flex-col items-center bg-white ring-cyan-600 shadow-lg rounded-lg w-52 m-4 p2 transition ease-in-out duration-300 hover:shadow-2xl">
        <img class="w-40 m-1" :src="imageUrl">
        <div class="m-1 text-center">
            <div>{{ props.name }}</div>
            <div>{{ props.packageType }}</div>
            <div>{{ props.price }} zł</div>
        </div>
        <div class="h-14 flex justify-between items-center">
            <input class="border-gray-300 border-solid border rounded-lg text-center w-12 h-9 m-2" name="field"
                type="number" min="0" v-model="selectedAmount">
            <button
                class="w-9 h-9 bg-blue-400 transition ease-in-out duration-300 hover:bg-blue-500 rounded-lg p-2 shadow-lg"
                @click="cartStore.addToCart(props.id, selectedAmount)">
                <img class="m-auto" src="/shopping-cart.svg" alt="shopping cart">
            </button>
        </div>
    </div>
</template>
