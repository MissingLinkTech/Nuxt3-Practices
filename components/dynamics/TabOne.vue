<template>
    <div>
        Tab One component get data from dynamic component
        <ul>
            <li v-for="user in props.userList" :key="user" @click="handleUser(user)">
                {{ user.name }} - {{ user.age }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({ userList: Array })
const emit = defineEmits(['toggle'])
const handleUser = user => emit('toggle', user)
</script>

<style lang="scss" scoped>

</style>