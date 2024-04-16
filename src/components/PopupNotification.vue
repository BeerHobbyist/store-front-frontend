<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue';
import { defineProps } from 'vue';

const props = defineProps({
    isOpen: Boolean,
    bgColor: String,
    textColor: String
});
</script>

<template>
    <TransitionRoot :show="isOpen" appear enter="transform transition duration-200" enter-from="opacity-0 scale-0"
        enter-to="opacity-100 scale-100" leave="transform duration-200 transition ease-in-out"
        leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-0"
        class="fixed bottom-0 right-0 mb-4 mr-4 shadow-xl rounded-lg p-6 w-auto z-50" :class="bgColor">
        <div>
            <h1 :class="textColor" class="text-lg">
                <slot></slot>
            </h1>
        </div>
    </TransitionRoot>
</template>