<script setup lang="ts">
import OrdersTable from '@/components/OrdersTable.vue';
import { ordersStore } from '@/orders';
import { onMounted } from 'vue';


onMounted(async () => {
    if(ordersStore.isLoaded) return;
    await ordersStore.fetchOrders();
});
</script>

<template>
    <OrdersTable />
</template>