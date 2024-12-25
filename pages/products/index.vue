<script setup>
import Product from "~/components/products/product.vue";

const products = useState("products", () => []);
const loading = useState("loading", () => false);
const searchInput = useState("searchInput", () => "");

async function getProducts() {
  try {
    loading.value = true;
    products.value = await $fetch("https://fakestoreapi.com/products");
  } catch (error) {
    loading.value = false;
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await getProducts();
});

const productFilters = computed(() => {
  const datas = products.value?.filter((item) =>
    String(item?.title).toLowerCase().includes(searchInput.value),
  );

  console.log(datas);
  return datas;
});
</script>

<template>
  <div>
    <input v-model="searchInput" placeholder="Search product..." /> <br />
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(item, idx) in productFilters" :key="idx">
        <Product :product="item" />
      </div>
    </div>
  </div>
</template>
