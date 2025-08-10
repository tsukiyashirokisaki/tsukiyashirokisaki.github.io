<script setup lang="ts">
import { Education, Experience, Introduction } from './components';
import { educations, experiences, introduction } from '@/data';
const title = {
  Education: 'Education',
  Experience: 'Experience',
  Introduction: 'Introduction',
};
</script>

<template>
  <div class="content">
    <div id="Education" class="section">
      <div class="title">{{ title.Education }}</div>
      <Education v-for="data in educations" :data="data" />
    </div>

    <div id="Experience" class="section">
      <div class="title">{{ title.Experience }}</div>
      <Experience v-for="data in experiences" :data="data" />
    </div>

    <div id="Introduction" class="section">
      <div class="title">{{ title.Introduction }}</div>
      <Introduction :data="introduction" />
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  color: white;
  margin-left: 30px;
  line-height: 2;
  display: block;
}
.title {
  font-size: 32px;
  font-weight: bold;
}
.section {
  background-color: #333333;
  margin-bottom: 20px;
  padding: 10px;
}
</style>
