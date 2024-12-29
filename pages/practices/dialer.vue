<template>
  <div>
    <h1>Dialer Pad</h1>
    <div class="diler__pad">
      <div class="input__display">{{ formattedPhoneNumber }}</div>
      <div class="buttons">
        <button
          v-for="number in numberKeys"
          :key="number"
          @click="addNumber(number)"
          @mousedown="handleMouseDown(number)"
          @mouseup="handleMouseUp"
          :class="['button', { active: activeKey === number }]"
          :disabled="phoneNumber.length === 10"
        >
          {{ number }}
        </button>
        <button
          class="button"
          :disabled="phoneNumber.length < 1"
          @click="deleteLast"
        >
          ⌫
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const phoneNumber = ref("");
const numberKeys = ref([
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "*",
  "0",
  "#",
]);
const activeKey = ref(null);
const formattedPhoneNumber = computed(() => {
  return phoneNumber.value.replace(/(\d{3})(\d{3})(\d{4})/, "+1 $1$2$3");
});
const addNumber = (number) => {
  if (phoneNumber.value.length < 10) {
    phoneNumber.value += number;
  }
};
const deleteLast = () => (phoneNumber.value = phoneNumber.value.slice(0, -1));
const handleKeyDown = (event) => {
  const { key } = event;
  if (
    /^\d$/.test(key) &&
    phoneNumber.value.length < 10 &&
    numberKeys.value.includes(key)
  ) {
    phoneNumber.value += key;
    activeKey.value = key;
  } else if (key === "Backspace") {
    deleteLast();
  }
};
const handleMouseDown = (number) => {
  if (phoneNumber.value.length < 10) {
    activeKey.value = number;
  }
};
const handleMouseUp = () => (activeKey.value = null);
const handleKeyUp = () => (activeKey.value = null);
onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyDown);
  window.removeEventListener("keyup", handleKeyUp);
});
</script>

<style scoped>
.diler__pad {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.input__display {
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  text-align: center;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}
.button {
  padding: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  /* background-color: #f9f9f9; */
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.button.active {
  background-color: #a4ead1;
  color: #ffffff;
}
</style>
