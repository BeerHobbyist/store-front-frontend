<script setup lang="ts">
import { categoriesStore, productsStore } from '../products'
import ItemSection from '../components/ItemSection.vue'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import type { Product } from '../products';

const activeSection = ref('');
const isSearching = ref(false);
const isSearchEmpty = ref(false);
const searchQuery = ref('');

const handleSearch = () => {
    if(searchQuery.value.length > 0) {
        isSearching.value = true;
    } else {
        isSearching.value = false;
    }
};

const filteredProducts = computed(() => {
    if (!searchQuery.value) {
        isSearchEmpty.value = true;
        return null;
    }
    const products = productsStore.products.filter((product: Product) =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
    console.log(products.length);
    return products;
    
});

const handleScroll = () => {
    let foundSection = '';
    for (const category of categoriesStore.categories) {
        const sectionElement = document.getElementById(category.name);
        if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.top >= 0) {
                foundSection = category.name;
                break;
            }
        }
    }
    activeSection.value = foundSection;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

watch(searchQuery, () => {
    handleSearch();
});
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
            <div
                class="flex flex-col bg-white rounded-xl shadow-lg items-center justify-start sticky top-[130px] h-[75vh]  py-4 ml-10 mr-5 w-48 p-4 overflow-y-auto">
                <h2 class="text-xl font-semibold text-gray-700 w-full text-left mb-5">Katgorie</h2>
                <div class="w-full">
                    <RouterLink v-for="category in categoriesStore.categories" :key="category.name"
                        :to="'#' + category.name" :class="{ 'active': activeSection === category.name }"
                        class="block py-2 px-3 mb-2 text-left text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-500 active:bg-blue-100 transition duration-300 ease-in-out">
                        {{ category.name }}
                    </RouterLink>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="flex flex-col mx-auto">
            <div class="block mt-8 mb-4 text-center">
                <input
                    class="h-10 rounded-full md:w-full xl:w-[700px] px-5 border-2 border-blue-400 focus:border-blue-600 focus:outline-none bg-white shadow-xl"
                    type="search" placeholder="Znajdź produkt który szukasz..." v-model="searchQuery"/>
            </div>
            <div v-if="!isSearching" class="overflow-y-auto mx-auto">
                <div v-for="category in categoriesStore.categories" :key="category.name">
                    <ItemSection :sectionName="category.name" :items="category.products" />
                </div>
            </div>
            <div v-else class="min-h-screen">
                <div v-if="filteredProducts.length !== 0">
                    <ItemSection sectionName="Wyniki wyszukiwania" :items="filteredProducts" />
                </div>
                <div v-else>
                    <h1 class="text-lg text-center text-gray-600 mt-10">Ups... Tu nic nie ma. Może źle wpisałeś nazwę? 🤔</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.active {
    @apply bg-blue-50 text-blue-500;
}
</style>
