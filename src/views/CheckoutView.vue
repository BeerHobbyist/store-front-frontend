<script setup lang="ts">
import DefaultFormInput from '@/components/DefaultFormInput.vue';
import WideButton from '@/components/WideButton.vue';
import { ref } from 'vue';
import { cartStore } from '@/cart';

const nip = ref('');
const companyName = ref('');
const tel = ref('');
const email = ref('');
const remarks = ref('');

const submitForm = () => {
    const order = {
        nip: nip.value,
        companyName: companyName.value,
        phone: tel.value,
        email: email.value,
        remarks: remarks.value,
        productsOrdered: cartStore.cartItems
    };
    fetch('http://127.0.0.1:5001/belex-storefront/us-central1/api/add-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to send order');
        }
    }).catch(error => {
        console.error(error);
    });
    cartStore.clearCart();
    alert('Zamówienie zostało złożone');
}
</script>

<template>
    <div class="w-1/2 m-auto mt-5 rounded shadow-lg p-5 bg-slate-50">
        <form class="checkout-form" @submit.prevent="submitForm">
        <DefaultFormInput class="w-full" label="Nazwa firmy:" inputId="name" v-model="companyName"/>
        <DefaultFormInput class="w-full" label="NIP:" inputId="nip" type="number" v-model="nip"/>
        <DefaultFormInput class="w-full" label="Telefon:" inputId="tel" type="tel" v-model="tel"/>
        <DefaultFormInput class="w-full" label="Email:" inputId="email" type="email" v-model="email"/>
        <DefaultFormInput class="w-full" label="Uwagi:" inputId="comment" v-model="remarks"/>
        <div class="flex justify-center mt-5">
            <WideButton>Wyślij</WideButton>
        </div>
    </form>
    </div>
</template>