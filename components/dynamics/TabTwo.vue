<template>
  <div>
    <h1>Tab two</h1>
    <p></p>
    <ul>
      <li v-for="product in props.products" :key="product">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({ products: Array });
</script>
