<script setup>
import { ref } from 'vue'

// 1. 定義畢業專題資料
const CapstoneData = ref([
  {
    title: '新手業務員輔助系統',
    tags: ['團隊', 'Vue', 'FastAPI', 'MS SQL', 'LINE Bot'],
    image: new URL('../pic/專題PPT.jpg', import.meta.url).href, // 封面圖
    images: [
      new URL('../pic/FuboGo2.png', import.meta.url).href,
      new URL('../pic/FuboGo3.png', import.meta.url).href,
      new URL('../pic/FuboGo4.png', import.meta.url).href,
      new URL('../pic/FuboGo5.png', import.meta.url).href,
      new URL('../pic/FuboGo6.png', import.meta.url).href,
      new URL('../pic/FuboGo7.png', import.meta.url).href,
      new URL('../pic/FuboGo8.png', import.meta.url).href,
      new URL('../pic/FuboGo9.png', import.meta.url).href,
      new URL('../pic/FuboGo10.png', import.meta.url).href,
      new URL('../pic/FuboGo11.png', import.meta.url).href,
      new URL('../pic/FuboGo12.png', import.meta.url).href,
      new URL('../pic/FuboGo13.png', import.meta.url).href,
      new URL('../pic/FuboGo14.png', import.meta.url).href,
      new URL('../pic/FoboGo!海報.png', import.meta.url).href
    ],
    description: `這是大三期間投入一年心血開發的畢業專題。我們與<strong>富邦</strong>深度合作，針對<strong>新手業務員</strong>在初期面臨的痛點，開發出一套輔助系統。<br><br>
    作為<strong>團隊組長</strong>，我負責跨團隊溝通與進度控管，在技術層面也主導了前端介面設計、資料庫架構規劃以及 API 串接實作。`
    ,
    description2: `本專案為與富邦合作之產學合作專題，旨在開發一套「新手保險業務員智慧輔助系統」，協助初入行者快速掌握客情互動與行政流程。
    <br>我在團隊中擔任核心開發角色，負責前後端串接整合、資料庫架構設計及部分 UI/UX 介面開發，並深度參與系統架構規劃與使用者流程設計。從初期的需求訪談、功能發想到最終的 Demo 展示與簡報，我完整經歷了業界規格的開發生命週期。<br>此作品最終於專題競賽中榮獲佳作，這段經驗不僅磨練了我在團隊協作中的溝通能力，更建立了我對大型系統開發規範的實戰經驗，也奠定了我投入軟體開發領域的專業基礎。`
  }
])

// 2. Modal 控制邏輯
const isModalOpen = ref(false)
const currentProject = ref(null)

const openModal = (project) => {
  currentProject.value = project
  isModalOpen.value = true
}
</script>

<template>
  <section class="Capstone-section">
    <div class="container">
      <div class="title-wrapper">
        <span class="title-bg-text">Capstone</span>
        <h2 class="section-title">畢業專題</h2>
        <div class="title-underline"></div>
      </div>

      <div class="project-card" v-for="project in CapstoneData" :key="project.title">
        <div class="project-image-wrapper">
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="image-overlay"></div>
        </div>

        <div class="project-info">
          <div class="tag-group">
            <span v-for="tag in project.tags" :key="tag" class="tech-tag">
              {{ tag }}
            </span>
          </div>

          <h3>{{ project.title }}</h3>
          
          <p v-html="project.description"></p>
          
          <button class="detail-btn" @click="openModal(project)">
            <span>查看詳情</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <Transition name="fade">
    <div v-if="isModalOpen" class="modal-overlay" @click.self="isModalOpen = false">
      <div class="modal-content">
        <button class="close-btn" @click="isModalOpen = false">&times;</button>

        <div class="modal-layout">
          <div class="modal-left">
            <div class="image-list">
              <img 
                v-for="(img, index) in currentProject?.images" 
                :key="index" 
                :src="img" 
                class="modal-gallery-img" 
              />
            </div>
          </div>

          <div class="modal-right">
            <div class="tag-group">
              <span v-for="tag in currentProject?.tags" :key="tag" class="mini-tag">
                {{ tag }}
              </span>
            </div>
            <h2 class="item_title">{{ currentProject?.title }}</h2>
            <div class="modal-divider"></div>
            <p class="item_description" v-html="currentProject?.description2"></p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.Capstone-section {
  padding: 80px 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
}

.container {
  max-width: 90%; 
  width: 90%;
  margin: 0 auto;
}

.title-wrapper {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.section-title {
  font-size: 2.2rem;
  color: var(--primary-color); /* 你喜歡的深紫灰 */
  font-weight: 850; /* 增加份量感 */
  letter-spacing: 4px; /* 讓中文更有張力 */
  position: relative;
  z-index: 2;
  margin: 0;
}

.title-underline {
  width: 40px;
  height: 4px;
  background: var(--primary-color);
  margin: 12px auto 0;
  border-radius: 10px;
}

.title-bg-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  font-size: 5rem;
  font-weight: 900;
  color: var(--primary-light);
  opacity: 0.4; /* 隱隱約約的感覺 */
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 10px;
  pointer-events: none;
}

/* 專題大卡片佈局 */
.project-card {
  display: flex;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
  border-radius: 30px;
  border: 1.5px solid var(--primary-light);
  box-shadow: 0 20px 50px rgba(163, 147, 235, 0.1);
  overflow: hidden; /* 確保內容不會超出圓角 */
  transition: all 0.4s ease;
  max-width: 90%;
  margin: 0 auto;
}

/* 圖片區域 */
.project-image-wrapper {
  flex: 2;
  position: relative;
  overflow: hidden;
  min-height: 400px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

/* 資訊文字區域 */
.project-info {
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tag-group {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--primary-color);
  background: white;
  border: 1px solid var(--primary-light);
  padding: 4px 12px;
  border-radius: 50px;
}

h3 {
  font-size: 1.8rem;
  color: var(--text-main);
  margin-bottom: 20px;
  font-weight: 850;
}

p {
  color: #5a5a75;
  line-height: 1.8;
  margin-bottom: 20px;
  font-weight: 500;
}

/* 查看詳情按鈕 - 延續發光橢圓風格 */
.detail-btn {
  margin-top: 30px;
  width: fit-content;
  padding: 12px 30px;
  background: white;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 50px;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.detail-btn:hover {
  background: var(--primary-color);
  color: white;
  box-shadow: 0 0 20px rgba(163, 147, 235, 0.4);
  transform: translateY(-2px);
}

/* Hover 互動效果 */
.project-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary-color);
  box-shadow: 
    0 0 40px 10px rgba(255, 255, 255, 1), 
    0 0 30px 10px rgba(163, 147, 235, 0.15);
}

/* 響應式：手機版改為上下排列 */
@media (max-width: 900px) {
  .project-card {
    flex-direction: column;
  }
  .project-image-wrapper {
    min-height: 250px;
  }
  .project-info {
    padding: 30px;
  }
}

/* 組長標籤樣式 */
.leader-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--primary-color);
  color: white;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(163, 147, 235, 0.4);
  z-index: 10;
}

strong {
  color: var(--primary-color);
  font-weight: 850; /* 加粗字重 */
  background: linear-gradient(transparent 70%, rgba(200, 180, 255, 0.3) 70%);
}

/* Hover 強化 */
.project-card:hover .leader-badge {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  margin-bottom: 12px;
}

.mini-tag {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--primary-color);
  border: 1px solid var(--primary-light);
  padding: 4px 12px;
  border-radius: 50px;
}

.item_title {
  font-size: 1.5rem;
  color: var(--text-main); /* 你喜歡的深紫灰 */
  font-weight: 850; /* 增加份量感 */
  position: relative;
  z-index: 2;
  margin: 0;
}

.item_description {
  font-size: 18px;
  color: var(--text-muted); /* 你喜歡的深紫灰 */
  font-weight: 500; /* 增加份量感 */
}

/* --- Modal 核心（最重要，決定它會不會浮起來） --- */
.modal-overlay {
  position: fixed; /* 固定在螢幕上 */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 30, 45, 0.5); /* 半透明遮罩 */
  backdrop-filter: blur(10px); /* 磨砂玻璃 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* 最高的層級 */
}

.modal-content {
  background: white;
  width: 90%;
  max-width: 1100px;
  height: 85vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

.modal-layout {
  display: flex;
  height: 100%;
  overflow: hidden;
}

/* --- 左側圖片展示（針對長方形優化） --- */
.modal-left {
  flex: 1.6;
  overflow-y: auto;
  background: #fdfdfd;
  padding: 30px;
  border-right: 1px solid #f0f0f5;
}

/* --- 滾動條整體樣式 --- */
.modal-left::-webkit-scrollbar {
  width: 6px; /* 寬度設細一點比較精緻 */
}

/* --- 滾動條軌道 (Track) --- */
.modal-left::-webkit-scrollbar-track {
  background: rgba(240, 240, 245, 0.5); /* 淺灰色半透明軌道 */
  border-radius: 10px;
}

/* --- 滾動條滑塊 (Thumb) --- */
.modal-left::-webkit-scrollbar-thumb {
  background: var(--primary-light); /* 使用你的主題淺紫色 */
  border-radius: 10px;
  border: 1px solid transparent; /* 增加一點邊距感 */
  transition: background 0.3s ease;
}

/* --- 滑塊懸停效果 (Hover) --- */
.modal-left::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color); /* 懸停時變深紫色 */
}

/* 針對 Firefox 瀏覽器 (標準語法) */
.modal-left {
  scrollbar-width: thin;
  scrollbar-color: var(--primary-light) transparent;
}

.modal-gallery-img {
  width: 100%;
  height: auto; /* 保持長方形比例 */
  display: block;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 25px;
  border: 1px solid #eee;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}

/* --- 右側內容 --- */
.modal-right {
  flex: 1;
  padding: 50px 40px;
  overflow-y: auto;
  background: #fafafa;
}

.modal-title {
  font-size: 1.8rem;
  color: #4a4a68;
  font-weight: 850;
  margin: 15px 0;
}

.modal-divider {
  width: 40px;
  height: 4px;
  background: var(--primary-color);
  margin-bottom: 20px;
  border-radius: 10px;
}

.modal-desc {
  color: #6a6a8a;
  line-height: 2;
  font-size: 1rem;
  text-align: justify;
}

/* --- 關閉按鈕 --- */
.close-btn {
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 35px;
  background: white;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  color: #999;
}

/* --- 過渡動畫 --- */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* --- 響應式佈局 --- */
@media (max-width: 900px) {
  .modal-layout { flex-direction: column; }
  .modal-left { flex: 1; max-height: 50%; }
  .modal-content { width: 95%; height: 90vh; }
}


</style>