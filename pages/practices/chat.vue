<template>
    <div>
        <h1>Chat</h1>
        <textarea v-model="chatContent" @input="checkForMention" placeholder="Type your message..."></textarea>
        <div v-if="showUserList">
            <input type="text" v-model="searchQuery" placeholder="Search users..." />
            <ul>
                <li v-for="user in filteredUsers" :key="user.id" @click="mentionUser(user)">
                    {{ user.name }}
                </li>
            </ul>
        </div>
        <p>Preview: <span v-html="formattedText"></span></p>
    </div>
</template>

<script setup>

const users = ref([]);
const searchQuery = ref('');
const chatContent = ref('');
const showUserList = ref(false);

const fetchUsers = async () => {
    users.value = await $fetch('https://jsonplaceholder.typicode.com/users');
};

const checkForMention = (event) => {
    const content = event.target.value;
    const lastChar = content.slice(-1);
    showUserList.value = lastChar === '@';
};

const mentionUser = (user) => {
    const atIndex = chatContent.value.lastIndexOf('@');
    chatContent.value = chatContent.value.slice(0, atIndex) + `@${user.name} `;
    showUserList.value = false;
};

const formattedText = computed(() => {
    let content = chatContent.value;
    users.value.forEach(user => {
        const mention = `@${user.name}`;
        const mentionRegex = new RegExp(`@${user.name}`, 'g');
        content = content.replace(mentionRegex, `<strong>${mention}</strong>`);
    });
    return content;
});

const filteredUsers = computed(() => {
    return users.value.filter(user => user.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

onMounted(() => {
    fetchUsers();
});
</script>

<style scoped>
/* Add your styles here */
</style>