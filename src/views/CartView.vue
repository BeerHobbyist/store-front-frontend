<script setup lang="ts">
import { cartStore } from '@/cart';
import { productsStore } from '@/products';
import CartFoot from '../components/CartFoot.vue'
import CartItem from '../components/CartItem.vue'
import { computed } from 'vue';

const getName = (id: number) => {
    return productsStore.products.find((product) => product.id === id)?.productName;
};

const getPrice = (id: number): number => {
    return productsStore.products.find((product) => product.id === id)?.price ?? 0;
};

const totalPrice = computed(() => {
    return cartStore.cartItems.reduce((acc, item) => {
        const productPrice = productsStore.products.find(product => product.id === item.id)?.price ?? 0;
        return acc + productPrice * item.count;
    }, 0);

});

const updateSelectedAmount = (id: number, amount: number) => {
    cartStore.updateAmount(id, amount);
};

</script>

<template>
    <div class="itemList">
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <CartItem v-for="item in cartStore.cartItems" :key="item.id" :name="getName(item.id)"
                    :selectedAmount="item.count" :price="Number((getPrice(item.id) * item.count).toFixed(2))"
                    :id="item.id" @amountChanged="updateSelectedAmount" />
            </tbody>

        </table>
        <CartFoot :totalPrice="Number(totalPrice.toFixed(2))" />
    </div>
</template>

<style scoped>
.itemList {
    margin: auto;
    margin-top: 20px;
    /* Space from the top of the page */
    width: 68%;
    background-color: var(--secondary-color);
    /* Background color */
    border-radius: 3px;
    /* Rounded corners */
    overflow: hidden;
    /* Ensures the inner table respects the container's border-radius */
    box-shadow: 0px 0px 2px 0px var(--text-color);
    /* Adds a shadow to the container */
}

.itemList table {
    width: 100%;
    border-collapse: separate;
    /* Allows for spacing between cells */
    border-spacing: 0px;
    /* Adjusts the spacing to zero for a clean look */
    overflow: hidden;
    border-radius: 0px;
}

.itemList tbody tr:last-child td {
    border-radius: 0px;
}

.itemList thead th {
    padding: 10px;
    /* Apply padding directly to the table header cells */
    text-align: left;
    color: var(--text-color);
    /* A darker color for text */
    background-color: white;
    /* If you want the headers to stand out */
    border-right: 1px solid var(--neutral-gray);
    /* Add a border to the right of each header cell */
    border-bottom: 1px solid var(--neutral-gray);
    /* Add a border to the bottom of each header cell */
}

.itemList thead th:last-child {
    border-right: none;
    /* Remove the border from the last header cell */
}

.checkout-field {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
</style>
