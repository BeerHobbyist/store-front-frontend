<script setup lang="ts"></script>

<template>
  <RouterLink to="/" class="flex items-center px-2 py-2 router-link-wrapper">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
.router-link-wrapper {
  @apply flex mx-1 hover:text-blue-500 hover:border-blue-500 text-gray-600 text-xl border border-transparent rounded transition duration-300 ease-in-out;
}
</style>
