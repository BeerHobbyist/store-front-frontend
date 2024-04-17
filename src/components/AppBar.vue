<script setup>
import { ref } from 'vue';
import Navbar from './Navbar.vue';

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <header class="bg-white/50 backdrop-blur backdrop-filter shadow-md sticky top-0 z-30 px-4 sm:px-14">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <h1 class="font-dancing text-4xl sm:text-6xl text-gray-600 py-3 ml-2">Bełex</h1>
      </div>
      <div class="sm:hidden">
        <button @click="toggleMenu" class="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6h16.5m-16.5 6h16.5m-16.5 6h16.5" />
          </svg>
        </button>
      </div>
      <Navbar class="sm:flex-row sm:flex hidden" />
    </div>
    <Navbar class="pb-2" v-show="menuOpen"/>
  </header>
</template>




