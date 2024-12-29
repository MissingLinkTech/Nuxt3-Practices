<template>
  <div>
    <h1>Tab One</h1>
    <p></p>
    <ul>
      <li v-for="user in props.userList" :key="user" @click="handleUser(user)">
        {{ user.name }} - {{ user.age }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({ userList: Array });
const emit = defineEmits(["toggle"]);
const handleUser = (user) => emit("toggle", user);
</script>
