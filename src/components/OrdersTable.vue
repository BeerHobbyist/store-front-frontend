<script setup lang="ts">
import { ref } from 'vue';
import { ordersStore } from '../orders';
import OrderItem from './OrderItem.vue';

</script>

<template>
    <div class="w-full px-96 pt-20 pb-20">
        <OrderItem v-for="order in ordersStore.orders" :key="order.id" :nip="order.nip" :email="order.email"
            :company-name="order.companyName" :phone="order.phone" :products="order.productsOrdered" :order-date="order.orderTime"/>
    </div>
</template>