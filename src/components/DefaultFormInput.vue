<script setup lang="ts">
defineProps({
    label: String,
    type: {
        type: String,
        default: 'text', // Default type is 'text'
    },
    inputId: String,
});

const model = defineModel();
</script>

<template>
    <div class="input-wrapper">
        <label :for="inputId" class="input-label">{{ label }}</label>
        <input :type="type" :id="inputId" class="input-field" v-model="model"/>
    </div>
</template>


<style scoped>
.input-wrapper {
    margin-bottom: 20px;    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
}

.input-label {
    display: block;
    color: var(--text-color);
    font-size: 18px;
    margin-right: 5px;
    width: 150px;
}

.input-field {
    width: 100%;
    padding: 5px 5px;
    background-color: #fff;
    color: var(--text-color);
    border: 2px solid var(--accent-color);
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.input-field:focus {
    outline: none;
    border-color: var(--accent-dark);
}
</style>