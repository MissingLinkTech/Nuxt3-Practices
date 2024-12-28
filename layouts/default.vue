<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/">Nuxt</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products">Products</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dialer">Dialer pad</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/recursive">Recursive</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/mention">Mention</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dynamic-component">Dynamic component</NuxtLink>
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
