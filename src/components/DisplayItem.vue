<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{ name?: string, packageType?: string }>();

const selectedAmount = ref(1);

watch(selectedAmount, (newValue: number) => {
    if (newValue < 0) {
        selectedAmount.value = 0;
    }
});
</script>

<template>
    <div class="item">
        <h3>{{ props.name }}</h3>
        <p>{{ props.packageType }}</p>
        <div class="couter">
            <input type="number" min="0" v-model="selectedAmount">
            <button>
                
            </button>
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

.couter input {
    width: 50px;
    height: 15px;
    text-align: center;
    border: none;
    border-radius: 5px 0px 0px 5px;
    padding: 5px;
    margin: 0ch;
}

.couter button {
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 0px 5px 5px 0px;
    background-color: #ccc;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}


</style>