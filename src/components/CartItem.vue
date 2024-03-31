<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps<{ selectedAmount: number, name?: string, price: number }>();
defineEmits(['update:selectedAmount']);

const currentAmount = ref(props.selectedAmount);

</script>

<template>
    <tr class="item">
        <td>{{ props.name }}</td>
        <td>{{ props.price }} zł</td>
        <td>
            <input name="field" type="number" min="0" v-model="currentAmount">
        </td>
    </tr>
</template>

<style scoped>
.item td {
    background-color: white; /* Background color */
    height: 45px;
    border-bottom: 1px solid var(--neutral-gray);
    border-right: 1px solid var(--neutral-gray);
    padding: 10px;
}

.item td:last-child {
    border-right: none;
    width: 55px;
    text-align: center;
}

.item td input {
    width: 50px;
    height: 30px;
    text-align: center;
    border: 1px solid var(--neutral-gray);
    border-radius: 5px;
}

</style>