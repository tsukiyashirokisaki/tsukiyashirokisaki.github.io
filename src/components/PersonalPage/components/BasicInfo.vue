<script setup lang="ts">
import { social_links, basic_info } from '@/data';
</script>

<template>
  <div class="container">
    <div class="avatar-section">
      <img :src="basic_info.icon" alt="avatar" class="avatar" />
      <div class="name">{{ basic_info.name }}</div>
    </div>
    <div class="icons-wrapper">
      <a
        v-for="data in social_links"
        :key="data.name"
        :href="data.url"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
      >
        <img class="icon" :src="data.icon" :alt="data.name" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: block;
  background-color: #000000;
  padding: 20px;
}

.avatar-section {
  text-align: center;
  width: 200px;
  margin: 0 auto; /* center horizontally */
}

.avatar {
  width: 100px;
  background-color: white;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

.name {
  font-size: 24px;
  color: white;
  margin-top: 8px;
}

.icons-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.icon-link {
  margin: 0 8px;
}

.icon {
  width: 32px; /* adjust size as needed */
  height: 32px;
  object-fit: contain;
  display: block;
}
</style>
