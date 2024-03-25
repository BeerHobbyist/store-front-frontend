<script setup lang="ts">
import AppBar from './components/AppBar.vue'
import DisplayItem from './components/DisplayItem.vue'
</script>

<template>
  <AppBar />
  <h1>HelloWorld</h1>
  <div class="item-display">
    <DisplayItem />
    <DisplayItem />
    <DisplayItem />
    <DisplayItem />
    <DisplayItem />
    <DisplayItem />
    <DisplayItem />
    <DisplayItem />
    <DisplayItem />
    <DisplayItem />
    <DisplayItem />
    <DisplayItem />
  </div>
</template>

<style scoped>
.item-display {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>
