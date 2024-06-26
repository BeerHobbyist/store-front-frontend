<script setup lang="ts">
import { ref, watch } from "vue";
import { cartStore } from "../cart";
import {
  TransitionRoot,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import ExpandableImage from "./ExpandableImage.vue";
import PopupNotification from "./PopupNotification.vue";

const props = defineProps<{
  id: string;
  name?: string;
  packageType?: string;
  price: number;
  imageUrl: string;
  disabled: boolean;
}>();

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
  <teleport to="body">
    <PopupNotification
      :is-open="isOpen"
      bg-color="bg-green-500"
      text-color="text-white"
    >
      Dodano do koszyka
    </PopupNotification>
  </teleport>
  <div
    :class="props.disabled ? 'opacity-55' : 'opacity-100'"  
    class="flex flex-col items-center justify-end bg-white shadow-lg rounded-lg h-[310px] w-52 m-4 py-2 transition ease-in-out duration-300 hover:shadow-2xl"
  >
    <ExpandableImage
      class="w-40 my-auto hover:cursor-pointer"
      :src="imageUrl"
      alt="product image"
    />
    <div class="m-1 text-center">
      <div>{{ props.name }}</div>
      <div>{{ props.packageType }}</div>
      <div>{{ props.price }} zł</div>
    </div>
    <div class="h-14 flex justify-between items-center">
      <input
        class="border-gray-300 border-solid border rounded-lg text-center w-12 h-9 m-2"
        name="field"
        type="number"
        min="0"
        v-model="selectedAmount"
      />
      <button
        class="w-9 h-9 bg-blue-400 transition ease-in-out duration-100 hover:bg-blue-500 active:bg-blue-700 active:ring-2 ring-blue-700 disabled:bg-blue-200 disabled:active:ring-0 rounded-lg p-2 shadow-lg"
        @click="onAddToCart"
        :disabled="props.disabled"
      >
        <img class="m-auto" src="/shopping-cart.svg" alt="shopping cart" />
      </button>
    </div>
  </div>
</template>
