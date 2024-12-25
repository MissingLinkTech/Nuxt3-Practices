<template>
    <div>
        {{ productsData }}
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <p>
                <input type="text" name="username" placeholder="Username" v-model="formData.username" />
            </p>
            <p>
                <input type="password" name="password" placeholder="**********" v-model="formData.password" />
            </p>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { type ILoginInput } from '~/interfaces/Ilogin';
import type { IProduct } from '~/interfaces/product';

const { $api } : any = useNuxtApp()
const formData = reactive<ILoginInput>({
    username: 'emilys',
    password: 'emilyspass'
})
const productsData = ref<IProduct[]>([])
async function handleLogin (): Promise<void> {
    try {
        const credentials: ILoginInput = {
            username: formData.username,
            password: formData.password
        }
        console.log($api)
        const response = await $api.auth.login(credentials);
        console.log(response)
    } catch(error) {
        console.log(error, 'error')
    }
}

async function getAllProducts() {
    try {
        return await $api.product.getAllProducts()
    } catch(error) {
        console.log(error, 'err')
    }
}

onMounted(async () => {
    const res = await getAllProducts()
    const products: IProduct[] = res.products
    console.log(products)
})
</script>

<style scoped>

</style>