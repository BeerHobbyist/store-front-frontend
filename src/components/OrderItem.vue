<script setup lang="ts">
import type { OrderedProduct } from "@/orders";
import { onMounted } from "vue";

const props = defineProps<{
  products: OrderedProduct;
}>();

onMounted(() => {
  console.log(props);
});
</script>

<template>
    <div class="w-full flex justify-between bg-neutral-100 p-2 mb-4 rounded-lg font-sans drop-shadow-md">
        <div>
            <h1 class="text-lg font-semibold text-gray-800">{{ products.product.name }}</h1>
            <p class="text-gray-500">{{ products.product.packageType }}</p>
        </div>
        <div>
            <p class="text-gray-800 text-right font-semibold">Ilość {{ products.count }} szt.</p>
            <p class="text-gray-500 text-right">w cenie: {{ products.product.price }} zł/szt.</p>
        </div>
    </div>
    
</template>
