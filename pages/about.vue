<template>
  <div>
    <h1>This is about page</h1>

    <button @click="count++">Click me</button>
    {{ count }}
  </div>
</template>

<script setup>
const count = useState("count", () => 0);

useHead({
  title: `My Nuxt App | About`,
  meta: [{ name: "description", content: "about page content " }],
});
</script>

<style scoped></style>
