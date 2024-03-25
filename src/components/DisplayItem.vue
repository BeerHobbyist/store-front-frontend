<script setup lang="ts">
import { product } from '../products';  // mock database data. Implement it props later
import { ref } from 'vue';

const selectedAmount = ref(0);
</script>

<template>
    <div class="item">
        <p>{{ product.name }}</p>
        <p>{{ product.packageType }}</p>
        <p>{{ product.price }}</p>
        <div class="couter"> 
            <input type="number" v-model="selectedAmount">        
        </div>
    </div>
</template>

<style scoped>
.item {
    border: 1px solid #ccc;
    background-color: gray;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 150px;
}
.couter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.couter button {
    background-color: white;
    border: none;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    
}

.couter input {
    width: 50px;
    text-align: center;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
}

</style>