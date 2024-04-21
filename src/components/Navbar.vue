<script setup lang="ts">
import DefaultRouterLink from "@/components/DefaultRouterLink.vue";
import ListIcon from "./Icons/ListIcon.vue";
import CartIcon from "./Icons/CartIcon.vue";
import ContactIcon from "./Icons/ContactIcon.vue";
</script>

<template>
  <nav>
    <DefaultRouterLink to="/">
      <ListIcon />
      Oferta
    </DefaultRouterLink>
    <DefaultRouterLink to="/cart">
      <CartIcon />
      Koszyk
    </DefaultRouterLink>
    <DefaultRouterLink to="/contact">
      <ContactIcon />
      Kontakt
    </DefaultRouterLink>
  </nav>
</template>
