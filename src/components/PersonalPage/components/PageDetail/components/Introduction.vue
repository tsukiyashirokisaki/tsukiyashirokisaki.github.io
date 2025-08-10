<template>
  <div class="inner-text container">{{ data }}</div>
</template>

<script setup lang="ts">
defineProps<{
  data: string;
}>();
</script>

<style scoped>
.container {
  padding: 10px;
}
</style>
