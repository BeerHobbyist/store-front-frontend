<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';

const props = defineProps<{ id: string, selectedAmount: number, name?: string, totalPrice: number, packageType: string, itemPrice: number, imageUrl: string }>();

const currentAmount = ref(props.selectedAmount);

watch(currentAmount, (newValue: number) => {
    if (newValue < 0) {
        currentAmount.value = 0;
    }
});

</script>

<template>
    <tr>
        <td class="table-item">
            <div class="flex items-center">
                <div>
                    <img class="h-24" :src="props.imageUrl" alt="product image">
                </div>
                <div class="ml-2">
                    <div class="text-lg">{{ props.name }}</div>
                    <div class="text-sm text-gray-400">{{ props.packageType }}</div>
                </div>
            </div>
        </td>
        <td class="table-item">
            <div class="text-lg">{{ props.totalPrice }} zł</div>
            <div class="text-sm text-gray-400">{{ props.itemPrice }} zł x {{ props.selectedAmount }}</div>
        </td>
        <td class="w-20 text-center border-b border-gray-200 bg-white">
            <input class="w-12 h-8 text-center border border-gray-200 rounded-md"
                @change="$emit('amountChanged', props.id, currentAmount)" name="field" type="number" min="0"
                v-model.number="currentAmount">
        </td>
    </tr>
</template>

<style scoped>
.table-item {
    @apply bg-white h-12 border-b border-r border-gray-200 p-3;
}
</style>