<script setup lang="ts">
import DefaultFormInput from '@/components/DefaultFormInput.vue';
import DefaultButton from '@/components/DefaultButton.vue';
</script>

<template>
    <div class="form-container">
        <form class="checkout-form">
        <DefaultFormInput class="input-form" label="Nazwa firmy:" inputId="name"/>
        <DefaultFormInput class="input-form" label="NIP:" inputId="nip" type="number"/>
        <DefaultFormInput class="input-form" label="Telefon:" inputId="tel" type="tel"/>
        <DefaultFormInput class="input-form" label="Email:" inputId="email" type="email"/>
        <DefaultFormInput class="comment-input-form" label="Uwagi:" inputId="comment"/>
        <div class="order-button-container">
            <DefaultButton>Wyślij</DefaultButton>
        </div>
    </form>
    </div>
</template>

<style scoped>
.form-container {
    width: 50%;
    margin: auto;
    margin-top: 20px;
    border-radius: 3px;
    box-shadow: 0px 0px 2px 0px var(--text-color);
    padding: 20px;
}
.input-form {
    width: 100%;
}
.order-button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>