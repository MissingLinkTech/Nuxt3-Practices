<template>
  <div>
    <button v-on:click="increment">Increment</button>
    <p>Counter: {{ getCount }}</p>
  </div>
</template>

<script setup>
const store = useCounterStore();
const { increment } = store
const { getCount } = storeToRefs(store);
</script>
