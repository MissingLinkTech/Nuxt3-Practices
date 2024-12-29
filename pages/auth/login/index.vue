<template>
  <div class="login-container">
    <UCard class="login-card">
      <template #header>
        <h2>Login</h2>
      </template>
      <UForm :state="formData" class="space-y-4" @submit.prevent="handleLogin">
        <UFormGroup label="Email" name="email">
          <UInput v-model="formData.username" />
        </UFormGroup>
        <UFormGroup label="Password" name="password">
          <UInput v-model="formData.password" type="password" />
        </UFormGroup>
        <UButton type="submit" :loading="loading" class="login-button"
          >Login</UButton
        >
      </UForm>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
import { type ILoginInput } from "~/interfaces/Ilogin";

const { $api }: any = useNuxtApp();
const formData = reactive<ILoginInput>({
  username: "emilys",
  password: "emilyspass",
});
const loading = ref<boolean>(false);
async function handleLogin(): Promise<void> {
  try {
    loading.value = true;
    const credentials: ILoginInput = {
      username: formData.username,
      password: formData.password,
    };
    const response = await $api.auth.login(credentials);
    console.log(response);
  } catch (error) {
    console.log(error, "error");
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
