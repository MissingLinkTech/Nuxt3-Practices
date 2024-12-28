<template>
    <div>
        Tab two component listing product list from dynamic component
        <ul>
            <li v-for="product in props.products" :key="product">
                {{ product.name }} - {{ product.price }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({ products: Array })
</script>