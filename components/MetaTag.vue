<script setup>
const { title, name, content } = defineProps({
  title: {
    type: String,
    required: false,
    default: "My Nuxt App",
  },
  name: {
    type: String,
    required: false,
    default: "",
  },
  content: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <div>
    <Head>
      <Title> {{ title }} </Title>
      <Meta :name="name" :content="content" />
    </Head>
  </div>
</template>
