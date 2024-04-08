<template>
  <button
    class="bg-blue-400 hover:bg-blue-500 rounded-lg p-4 min-w-24 text-white shadow-lg transition ease-in-out duration-300 transform hover:scale-105"
    @click="onClick">
    <slot></slot> <!-- Allows for custom button text -->
  </button>
</template>

<script setup lang="ts">
// Props for custom behavior like emitting an event upon click
const emit = defineEmits(['click']);

const onClick = () => {
  emit('click'); // Emit a click event when the button is clicked
};
</script>

<style scoped></style>