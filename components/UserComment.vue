<template>
  <div>
    <ul>
      <li v-for="item in comments" :key="item">
        <p>{{ item?.body }}</p>
        <user-comment v-if="item?.replies?.length" :comments="item.replies" />
      </li>
    </ul>
  </div>
</template>
<script setup>
const { comments } = defineProps({
  comments: Array,
});
</script>

<style scoped>
ul {
  list-style: circle;
}
ul li {
  margin: 0 15px;
}
</style>
