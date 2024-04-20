<script setup lang="ts">
defineProps<{
  nip: number;
  companyName: string;
  email: string;
  phone: string;
  orderTime: Date;
}>();
</script>

<template>
  <div class="font-sans">
    <div class="flex justify-between">
        <h1 class="font-semibold text-left mr-8">{{ companyName }}</h1>
        <div class="font-semibold">{{ orderTime.getDate() }}/{{ orderTime.getMonth() }}/{{ orderTime.getFullYear() }}</div>
    </div>
    <p class="text-left text-gray-500">nip: {{ nip }}</p>
    <p class="text-left text-gray-500">{{ email }}</p>
    <p class="text-left text-gray-500">tel: {{ phone }}</p>
  </div>
</template>

<style scoped></style>
