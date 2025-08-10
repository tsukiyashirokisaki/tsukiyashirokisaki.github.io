<template>
  <div class="experience">
    <img :src="data.icon" class="experience-img" />
    <div class="inner-text">
      <div class="experience-title">{{ data.title }}</div>
      <div>{{ data.description }}</div>
    </div>
    <div class="inner-text experience-period">{{ data.period }}</div>
  </div>
</template>

<script setup lang="ts">
import { type Experience } from '@/data';
defineProps<{
  data: Experience;
}>();
</script>

<style scoped>
.experience {
  display: flex;
  align-items: center;
  padding: 10px;
}

.experience-img {
  width: 100px;
  height: 100px;
  background-color: white;
  margin-right: 20px;
}

.experience-title {
  font-weight: bold;
}

.experience-period {
  margin-left: auto;
}
</style>
