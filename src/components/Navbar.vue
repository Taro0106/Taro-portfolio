<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const brandName = ref('Taro’s Portfolio')
const isMenuOpen = ref(false)

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

      <button class="mobile-toggle" @click="isMenuOpen = !isMenuOpen" :class="{ 'is-active': isMenuOpen }">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <ul class="nav-menu" :class="{ 'nav-active': isMenuOpen }">
        <li v-for="link in navLinks" :key="link.name">
          <RouterLink :to="link.path" class="nav-item" @click="isMenuOpen = false">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: var(--primary-light);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 0.8rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 70px;
}

.container {
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.5px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 1.05rem;
  padding: 8px 0;
  position: relative;
  transition: 0.3s;
}

.nav-item:hover,
.router-link-active {
  color: var(--text-main) !important;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--text-main);
  transition: 0.3s;
}

.nav-item:hover::after,
.router-link-active::after {
  width: 100%;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
}

.bar {
  width: 24px;
  height: 2px;
  background-color: var(--text-main);
  transition: 0.3s;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 80px;
    left: 20px;
    right: 20px;
    background-color: color-mix(in srgb, var(--primary-light), transparent 40%); 
    backdrop-filter: blur(10px); 
    border-radius: 10px;
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    display: flex;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .nav-menu .nav-item {
    color: #fff; 
  }

  .nav-menu.nav-active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .mobile-toggle.is-active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .mobile-toggle.is-active .bar:nth-child(2) { opacity: 0; }
  .mobile-toggle.is-active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
}
</style>