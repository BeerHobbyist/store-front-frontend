<template>
    <button class="button" @click="onClick">
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
  
  <style scoped>
  .button {
    padding: 10px 20px;
    background-color: #7AA2E3; /* The specified accent color */
    color: white; /* Text color that contrasts well with the button background */
    border: none;
    border-radius: 5px; /* Slightly rounded corners for a modern look */
    cursor: pointer;
    font-size: 16px; /* Adjust based on your design requirements */
    transition: background-color 0.3s, transform 0.2s; /* Smooth transition for hover effects */
  }
  
  .button:hover {
    background-color: var(--accent-dark); /* Slightly darken the button on hover for feedback */
    transform: scale(1.05); /* Slightly enlarge the button on hover */
  }
  
  .button:active {
    background-color: lighten(#7AA2E3, 10%); /* Lighten the button on active/click for feedback */
  }
  </style>
  