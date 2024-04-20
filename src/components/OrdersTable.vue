<script setup lang="ts">
import { ref } from "vue";
import { ordersStore } from "../orders";
import OrderTab from "./OrderTab.vue";
import OrderItem from "./OrderItem.vue";
import { TabGroup, TabList, Tab, TabPanel, TabPanels } from "@headlessui/vue";
</script>

<template>
  <div class="w-4/6 mx-auto px-4 mt-8 my-auto">
    <TabGroup>
      <div class="flex rounded-lg h-[80vh]">
        <TabList
          class="flex flex-col flex-shrink-0 overflow-y-auto space-y-4 p-4"
        >
          <Tab
            as="template"
            v-for="order in ordersStore.orders"
            :key="order.id"
            v-slot="{ selected }"
          >
            <OrderTab
              :class="{
                'p-2 bg-white rounded-lg drop-shadow-md focus:outline-none transform ease-in-out duration-400':
                  !selected,
                'p-2 bg-blue-100 rounded-lg drop-shadow-xl scale-105 focus:outline-none':
                  selected,
              }"
              class="hover:cursor-pointer"
              :email="order.email"
              :company-name="order.companyName"
              :nip="order.nip"
              :phone="order.phone"
              :order-time="order.orderTime"
            />
          </Tab>
        </TabList>
        <TabPanels
          class="p-4 m-4 rounded-lg bg-white drop-shadow-lg w-full overflow-y-auto flex-grow"
        >
          <TabPanel v-for="order in ordersStore.orders" :key="order.id">
            <div v-for="product in order.productsOrdered">
              <OrderItem :products="product" />
            </div>
            <h1 class="font-sans font-semibold text-lg mt-8">Komentarz do zamówenia:</h1>
            <p class="font-sans">{{ order.remarks }}</p>
          </TabPanel>
        </TabPanels>
      </div>
    </TabGroup>
  </div>
</template>
