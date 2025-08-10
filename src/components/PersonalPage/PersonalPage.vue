<script setup lang="ts">
import { BasicInfo, PageDetail } from './components';
</script>

<template>
  <div class="container">
    <div class="content-padding">
      <div class="flex-row">
        <BasicInfo />
        <PageDetail />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: block;
}

.content-padding {
  padding: 40px;
}

.flex-row {
  display: flex;
  align-items: flex-start; /* prevent vertical stretching */
}
</style>
