<script setup lang="ts">
import { cartStore } from '@/cart';
import DefaultButton from './DefaultButton.vue';
defineProps<{ totalPrice: number }>();
</script>

<template>
    <div class="cart-foot">
        <DefaultButton @click="cartStore.clearCart">Clear cart</DefaultButton>
        <DefaultButton @click="$router.push('/checkout')">Checkout</DefaultButton>
        <div>
            <div class="price-text">
                Całość: {{ totalPrice }} zł
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart-foot {
    background-color: var(--neutral-gray);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
}

.price-text {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    padding: 10px;
    color: var(--text-color-light);
}
</style>