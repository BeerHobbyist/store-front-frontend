<script setup lang="ts">

</script>

<template>
  <header class="bg-white/50 backdrop-blur backdrop-filter shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <h1 class="font-dancing text-6xl text-gray-600 py-3 ml-2">Bełex</h1>
      </div>
      <nav class="flex">
        <div class="router-link-wrapper">
          <RouterLink to="/" class="flex items-center px-2 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
            </svg>
            <div>Oferta</div>
          </RouterLink>
        </div>
        <div class="router-link-wrapper">

          <RouterLink class="flex items-center px-2 py-2" to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <div>Koszyk</div>
          </RouterLink>
        </div>
        <div class="router-link-wrapper">
          <RouterLink to="/cart" class="flex items-center px-2 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-7  h-7 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <div>Kontakt</div>
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.router-link-wrapper {
  @apply flex mx-1 hover:text-blue-500 hover:border-blue-500 text-gray-600 text-xl border border-transparent rounded transition duration-300 ease-in-out;
}
</style>
