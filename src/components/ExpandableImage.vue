<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';

const props = defineProps<{ src: string, alt: string }>();
const isExpanded = ref(false);

function handleExpand() {
    isExpanded.value = !isExpanded.value;
}
</script>

<template>
    <div class="relative">
        <img :src="props.src" :alt="alt" class="w-[100%] object-cover rounded-lg" @click="handleExpand">
        <Dialog :open="isExpanded" @close="handleExpand"
            class="fixed z-40 inset-0 flex items-center justify-center p-4">
            <div v-show="isExpanded" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
            <DialogPanel class="max-w-4xl mx-auto bg-white rounded shadow-lg p-6 z-50">
                <img :src="props.src" alt="product image" class="w-[100vw] object-cover rounded-lg ">
            </DialogPanel>
        </Dialog>
    </div>
</template>