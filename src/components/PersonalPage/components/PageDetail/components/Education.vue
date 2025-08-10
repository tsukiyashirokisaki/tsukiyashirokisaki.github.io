<template>
  <div class="education">
    <img :src="data.icon" class="education-img" />
    <div class="inner-text">{{ data.degree }}: {{ data.major }}, {{ data.school }}</div>
    <div class="education-period inner-text">{{ data.period }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Education } from '@/data';

defineProps<{
  data: Education;
}>();
</script>

<style scoped>
.education {
  display: flex;
  align-items: center;
  padding: 10px;
}

.education-img {
  height: 60px;
  margin-right: 20px;
}

.education-period {
  margin-left: auto;
}
</style>
