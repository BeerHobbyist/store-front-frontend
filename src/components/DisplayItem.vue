<script setup lang="ts">
import { ref, watch } from 'vue';
import { cartStore } from '../cart';

const props = defineProps<{ id: string, name?: string, packageType?: string, price: number }>();

const selectedAmount = ref(1);

watch(selectedAmount, (newValue: number) => {
    if (newValue < 0) {
        selectedAmount.value = 0;
    }
});

</script>

<template>
    <div class="item">
        <img class="product-image" src="/public/placeholer-product.svg" alt="placeholder image">
        <div class="product-attributes">
            <div>{{ props.name }}</div>
            <div>{{ props.packageType }}</div>
            <div>{{ props.price }} zł</div>
        </div>
        <div class="counter">
            <input name="field" type="number" min="0" v-model="selectedAmount">
            <button @click="cartStore.addToCart(props.id, selectedAmount)">
                <img src="/public/shopping-cart.svg" alt="shopping cart">
            </button>
        </div>
    </div>
</template>

<style scoped>
.product-attributes {
    margin: 10px 10px;
}

.item {
    box-shadow: 0px 0px 2px 0px var(--text-color); /* Adds a shadow to the container */
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 200px;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.item:hover {
    transform: scale(1.07);
    /* Slightly increase the size */
}

.counter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.counter input {
    width: 50px;
    height: 25px;
    text-align: center;
    border: none;
    border-radius: 5px 0px 0px 5px;
    padding: 5px;
    margin: 0ch;
    border: 1px solid var(--neutral-gray);
    border-radius: 5px;
}

.counter button {
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    background-color: var(--accent-color);
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s; /* Smooth transition for hover effects */
}

.counter button:hover {
    transform: scale(1.05); /* Slightly enlarge the button on hover */
  }

.counter img {
    padding: 7px 0px 0px 0px;
    width: 25px;
    height: 25px;
}

.product-image {
    width: 150px;
    height: 150px;
    margin: 0 auto;
}
</style>