<script setup lang="ts">
import { cartStore } from '@/cart';
import { productsStore } from '@/products';
import CartItem from '../components/CartItem.vue'

const getName = (id: number) => {
    return productsStore.products.find((product) => product.id === id)?.productName;
};

const getPrice = (id: number) => {
    return productsStore.products.find((product) => product.id === id)?.price;
};

</script>

<template>
    <div class="itemList">
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartStore.cartItems" :key="item.id">
                    <td>{{ getName(item.id) }}</td>
                    <td>{{ item.count }}</td>
                    <td>{{ getPrice(item.id) }}</td>
                </tr>
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    </div>
</template>

<style scoped>
.itemList {
    border: 2px solid var(--accent-color); /* Accent color for the border */
    margin: auto;
    margin-top: 20px; /* Space from the top of the page */
    width: 50%;
    background-color: var(--background-color); /* Background color */
    border-radius: 10px; /* Rounded corners */
    overflow: hidden; /* Ensures the inner table respects the container's border-radius */
    /* Other styles */
}

.itemList table {
    width: 100%; 
    border-collapse: separate; /* Allows for spacing between cells */
    border-spacing: 0; /* Adjusts the spacing to zero for a clean look */
}

.itemList th, .itemList td {
    padding: 8px;
    background-color: #FFFFFF; /* Table cells have a white background */
    border-right: 1px solid var(--accent-color); /* Adds vertical lines between columns */
    border-bottom: 1px solid var(--accent-color); /* Adds horizontal lines between rows */
}

/* Remove the border from the last column */
.itemList th:last-child, .itemList td:last-child {
    border-right: none;
}

.itemList th {
    text-align: left;
    background-color: var(--primary-color); /* Primary color for the header background */
    color: var(--text-color); /* A darker color for text */
    /* Apply border-radius to the first and last th elements if necessary */
}

.itemList tr:first-child th:first-child {
    border-top-left-radius: 10px;
}

.itemList tr:first-child th:last-child {
    border-top-right-radius: 10px;
}

.itemList tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}

.itemList tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}

/* Ensure the table headers have a bottom border as well */
.itemList thead th {
    border-bottom: 2px solid var(--accent-color); /* Accent color for the bottom border of headers */
}

/* Remove bottom border for the last row to match the table's bottom border-radius */
.itemList tr:last-child td {
    border-bottom: none;
}
</style>
