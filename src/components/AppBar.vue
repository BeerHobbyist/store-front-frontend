<script setup lang="ts">

</script>

<template>
  <div class="app-bar">
    <div class="app-bar-content">
      <div class="left">
        <h1 class="title-caption">App Bar</h1>
      </div>
      <div class="right">
        <RouterLink to="/cart">Go to cart</RouterLink>
        <RouterLink to="/">Home</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-bar {
  background-color: #464646;
  padding: 1rem;
}

.app-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto; /* Center the app-bar-content */
}

.title-caption {
  margin: 0;
  font-size: 1.5rem;
  color: white;
  text-transform: uppercase; /* Optional: makes it look more "app-bar-like" */
}

.left, .right {
  display: flex;
  align-items: center;
}

/* Style for RouterLink */
.router-link-active, .router-link-exact-active, .right a {
  color: white; /* Match the text color to the app bar */
  text-decoration: none; /* Remove underline from links */
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 2px solid white; /* Optional: Adds a border to the link */
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */
  margin-left: 1rem; /* Space out multiple right-side items */
}

/* Hover effects for links */
.right a:hover, .right a:focus {
  background-color: white; /* Background color on hover */
  color: #464646; /* Text color on hover */
  text-decoration: none; /* Ensure no underline appears on hover */
}
</style>