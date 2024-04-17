<script setup lang="ts">
import type { OrderedProduct } from '@/orders';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue';
import { c } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';
import { onMounted } from 'vue';

const props = defineProps<{
    nip: number;
    companyName: string;
    phone: string;
    email: string;
    orderDate: Date;
    products: OrderedProduct[];
}>();

onMounted(() => {
    console.log(props);
});
</script>

<template>
    <Disclosure>
        <DisclosureButton
            class="w-full rounded-lg bg-slate-200 shadow-lg mb-5 px-4 py-2 text-left text-sm font-medium text-black hover:bg-slate-300 focus:outline-none focus-visible:ring focus-visible:ring-slate-600/75">
            <div class="flex flex-row justify-between">
                <div>
                    <div>
                        <div class="text-xl font-semibold">{{ companyName }}</div>
                        <div class="text-sm text-gray-500">Nip: {{ nip }}</div>
                    </div>
                    <div>
                        <div class="text-sm text-red-500">Tel: {{ phone }}</div>
                        <div class="text-sm text-gray-500">Email: {{ email }}</div>
                    </div>
                </div>
                <div>
                    <div>{{ orderDate.toDateString() }}</div>
                    <div class="text-right">{{ orderDate.getHours() }}:{{ orderDate.getMinutes() }}</div>
                </div>
            </div>
        </DisclosureButton>
        <DisclosurePanel>
            <div class="h-80 overflow-y-auto">
                <div class="pb-4 pt-4 px-4 text-lg flex flex-row justify-between bg-slate-50 ring-2 ring-slate-300 rounded-md m-4"
                    v-for="product in products">
                    <div>
                        <h3 class="text-xl font-semibold">{{ product.product.name }}</h3>
                        <p class="text-sm text-gray-500">{{ product.count }} x {{ product.product.price }} zł</p>
                    </div>
                    <div class="grid place-items-center">
                        <p class="text-base text-gray-700">{{ product.product.packageType }}</p>
                    </div>
                </div>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>