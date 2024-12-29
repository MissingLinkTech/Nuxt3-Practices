<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/practices/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/practices/products">Products</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/practices/dialer">Dialer pad</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/practices/recursive">Recursive</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/practices/mention">Mention</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/practices/dynamic-component">Dynamic component</NuxtLink>
      </li>
    </ul>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
ul li {
  list-style-type: none;
  display: inline-block;
  margin: 0 5px;
}
</style>
