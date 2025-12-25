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
*, *::before, *::after {
  box-sizing: border-box; /* 確保 padding 不會撐開寬度導致頁面晃動 */
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100vw;       /* 強制寬度等於視窗寬 */
  overflow-x: hidden; /* 核心：禁止任何橫向滾動 */
  font-family: 'Inter', -apple-system, sans-serif;
  background-color: #fff;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;        /* 確保不超出 body */
  overflow-x: hidden; /* 第二道防線 */
}

.content {
  flex: 1;
  width: 100%;
  max-width: 100%;    /* 限制最大寬度，防止子組件撐開 */
  overflow-y: auto;
  overflow-x: hidden; /* 禁止內容產生橫向晃動 */
  display: flex;
  flex-direction: column;

  /* 隱藏滾動條 */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>