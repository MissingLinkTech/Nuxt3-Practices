<template>
  <div>
    <h1>Mention user</h1>
    <p>
      {{ content }}
    </p>
    <div>
      <textarea
        ref="textarea"
        v-model="content"
        @input="onInput"
        rows="5"
        cols="30"
      ></textarea>
    </div>
    <div>
      <ul>
        <li v-for="user in users" :key="user">
          <button @click="mentionUser(user)">@{{ user.name }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const textarea = useTemplateRef("textarea");
const content = ref("");
const users = ref([
  { id: 1, name: "Jane Doe" },
  { id: 2, name: "Richard Roe" },
  { id: 3, name: "Joe Shmoe" },
  { id: 4, name: "Joe Blow" },
  { id: 5, name: "Joe Bloggs" },
]);
const cursorPosition = ref(0);
const mentionUser = (user) => {
  const mentionText = `@${user.name}`;
  const beforeCursor = content.value.slice(0, cursorPosition.value);
  const afterCursor = content.value.slice(cursorPosition.value);
  content.value = `${beforeCursor}${mentionText}${afterCursor}`;

  nextTick().then(() => {
    /** move the cursor position after the inserted text */
    const newPosition = cursorPosition.value + mentionText.length;
    textarea.value.setSelectionRange(newPosition, newPosition);
    textarea.value.focus();
    cursorPosition.value = newPosition;
  });
};
const onInput = (event) => (cursorPosition.value = event.target.selectionStart);
</script>

<style lang="css" scoped>
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline;
  margin-right: 10px;
}
button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}
button:hover {
  background-color: #0056b3;
}
</style>
