<script setup lang="ts">

defineProps<{ selectedAmount: number, name?: string }>();

</script>

<template>
    <div class="cartItem">
        <p> {{ name }} </p>
        <p> {{ selectedAmount }} </p>
    </div>
</template>

<style scoped>
.cartItem {
    border: 1px solid #ccc;
    background-color: gray;
    border-radius: 10px;
    margin: 1px;
    justify-content: center;
    flex-direction: row;
    display: flex;
    text-align: center;
    width: 100%;
}
</style>