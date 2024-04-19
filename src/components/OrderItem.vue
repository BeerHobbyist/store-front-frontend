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
    <div class="w-full">
        <div>
            <h1>{{ products.product.name }}</h1>
        </div>
    </div>
</template>
