<script setup lang="ts">
import { categoriesStore, productsStore } from '../products'
import ItemSection from '../components/ItemSection.vue'
</script>

<template>
    <!-- Existing Loading Spinner -->
    <div v-if="productsStore.isLoading" class="flex items-center justify-center mt-40 mx-auto transform scale-150">
        <img class="animate-spin" src="/public/loading.svg" alt="Loading" />
    </div>

    <!-- Grid Layout: Sidebar and Content Area -->
    <div v-else class="flex">
        <!-- Sidebar -->
        <div class="block">
            <div class="flex flex-col bg-white rounded-xl shadow-lg items-center justify-start sticky top-[120px] py-4 ml-10 mr-5 w-48 p-4 overflow-y-auto">
                <h2 class="text-xl font-semibold text-gray-700 w-full text-left mb-5">Katgorie</h2>
                <div class="w-full">
                    <RouterLink v-for="category in categoriesStore.categories" :key="category.name"
                        :to="'#' + category.name"
                        class="block py-2 px-3 mb-2 text-left text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-500 active:bg-blue-100 transition duration-300 ease-in-out">
                        {{ category.name }}
                    </RouterLink>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="overflow-y-auto">
            <div v-for="category in categoriesStore.categories" :key="category.name">
                <ItemSection :sectionName="category.name" :items="category.products" />
            </div>
        </div>
    </div>
</template>


