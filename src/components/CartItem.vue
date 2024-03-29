<script setup lang="ts">

defineProps<{ selectedAmount: number, name?: string, price: number }>();

</script>

<template>
    <tr class="item">
        <td>{{ name }}</td>
        <td>{{ price }} zł</td>
        <td>
            <input name="field" type="number" min="0" :value="selectedAmount">
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