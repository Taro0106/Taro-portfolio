<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main class="content">
    <RouterView />
  </main>
</template>

<style>
/* 全域重置 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%; /* 必須設定，否則子元素百分比會失效 */
  overflow: hidden; /* 禁止 body 滾動，改由 content 滾動 */
  font-family: 'Inter', -apple-system, sans-serif;
  
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 整個視窗高度 */
}

.content {
  flex: 1;          /* 自動填滿剩餘空間 */
  overflow-y: auto; /* 內容超過時顯示滾動條 */
  display: flex;
  flex-direction: column;
  /* 隱藏滾動條：適用於 Chrome, Safari, Edge, Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* 隱藏滾動條：適用於 Firefox */
  scrollbar-width: none;

  /* 隱藏滾動條：適用於 IE 和舊版 Edge */
  -ms-overflow-style: none;
}
</style>