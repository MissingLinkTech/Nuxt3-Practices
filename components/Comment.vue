<template>
  <div class="comment">
    <div v-for="comment in comments" :key="comment">
      <div class="comment__content">
        <strong>{{ comment?.name }}</strong>
        : {{ comment?.body }}
      </div>
      <user-comment
        v-if="comment?.comments?.length"
        :comments="comment.comments"
      />
    </div>
  </div>
</template>

<script setup>
const { comments } = defineProps({
  comments: Array,
});
</script>

<style scoped>
.comment {
  margin: 20px;
}
</style>
