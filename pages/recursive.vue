<template>
  <div>
    <h3>Comments Tree</h3>
    <comment :comments="comments" />
  </div>
</template>

<script setup>
import { comments } from "~/constants";
</script>
