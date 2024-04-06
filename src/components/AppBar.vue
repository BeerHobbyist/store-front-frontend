<script setup lang="ts">

</script>

<template>
  <div class="bg-cyan-600 p-5">
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
  background-color: var(--primary-color);
  padding: 1.2rem;
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
  color: var(--text-color);
  text-transform: uppercase;
}

.left, .right {
  display: flex;
  align-items: center;
}

/* Style for RouterLink */
.router-link-active, .router-link-exact-active, .right a {
  color: var(--text-color); /* Match the text color to the app bar */
  text-decoration: none; /* Remove underline from links */
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 2px solid var(--text-color); /* Optional: Adds a border to the link */
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */
  margin-left: 1rem; /* Space out multiple right-side items */
}

/* Hover effects for links */
.right a:hover, .right a:focus {
  background-color: var(--secondary-color); /* Background color on hover */
  color: var(--text-color); /* Text color on hover */
  text-decoration: none; /* Ensure no underline appears on hover */
}
</style>