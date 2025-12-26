<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const brandName = ref('Taro’s Portfolio')
const navLinks = ref([
  { name: '首頁', path: '/' },
  { name: '作品集', path: '/about' },
  { name: '課堂成績', path: '/score' }
])
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <RouterLink to="/" class="brand-group">
        <img src="https://i.pinimg.com/736x/53/92/3b/53923bab15a5e35571859fe8576cb874.jpg" alt="Logo" class="logo-img" />
        <span class="brand-name">{{ brandName }}</span>
      </RouterLink>

      <ul class="nav-menu">
        <li v-for="link in navLinks" :key="link.name">
          <RouterLink :to="link.path" class="nav-item">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* 導覽列主體 */
.navbar {
  width: 100%;
  background-color: var(--primary-light);
  box-shadow: 0 4px 12px var(--shadow-navbar); /* 稍微加深陰影讓質感更好 */
  padding: 0.8rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 70px;
}

/* 內容容器 */
.container {
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* --- 左側區域：Logo & 名稱 --- */
.brand-group {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: var(--transition-smooth);
}

.brand-group:hover {
  opacity: 0.8;
}

.logo-img {
  width: 40px; /* 稍微放大一點 */
  height: 40px;
  object-fit: contain;
  border-radius: 8px; /* 如果 logo 是方形的，加點圓角更可愛 */
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 800; /* 加粗 */
  color: var(--text-main);
  letter-spacing: -0.5px;
  font-family: 'Inter', sans-serif; /* 建議使用簡潔的字體 */
}

/* --- 右側區域：選單 --- */
.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem; /* 增加一點間距 */
  margin: 0;
  padding: 0;
}

.nav-item {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 1.05rem;
  padding: 8px 0;
  transition: var(--transition-smooth);
  position: relative;
}

/* 滑鼠懸停與選中狀態 */
.nav-item:hover,
.router-link-active {
  color: var(--primary-color) !important;
}

/* 底線動畫效果 (選配，增加高級感) */
.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: var(--transition-smooth);
}

.nav-item:hover::after,
.router-link-active::after {
  width: 100%;
}

/* 響應式微調 */
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  .nav-menu {
    gap: 1.2rem;
  }
  .brand-name {
    font-size: 1.2rem;
  }
  .logo-img {
    width: 32px;
    height: 32px;
  }
}
</style>