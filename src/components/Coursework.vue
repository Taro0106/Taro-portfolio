<script setup>
import { ref } from 'vue'

// 1. 定義作品資料陣列
const projects = ref([
  {
    id: 1,
    title: '犀牛沙發工廠',
    tags: ['個人','HTML'],
    image: new URL('../pic/犀牛沙發.png', import.meta.url).href,
    images: [
      new URL('../pic/犀牛沙發.png', import.meta.url).href,
      new URL('../pic/犀牛沙發2.png', import.meta.url).href,
      new URL('../pic/犀牛沙發3.png', import.meta.url).href,
      new URL('../pic/犀牛沙發4.png', import.meta.url).href
    ],
    description: '本專案為課程指定主題，旨在針對「犀牛沙發工廠」現有網站進行全面性的視覺重構與架構優化。透過純 HTML/CSS 技術，將原本資訊較為雜亂、風格過時的傳統工廠網頁，轉型為具備現代感、品牌故事性且使用者導向的專業品牌形象官網。'
  },
  {
    id: 2,
    title: '輔大教發中心',
    tags: ['個人','HTML'],
    image: new URL('../pic/教發.png', import.meta.url).href,
    images: [
      new URL('../pic/教發.png', import.meta.url).href,
      new URL('../pic/教發2.png', import.meta.url).href,
      new URL('../pic/教發3.png', import.meta.url).href,
      new URL('../pic/教發4.png', import.meta.url).href,
      new URL('../pic/教發5.png', import.meta.url).href,
      new URL('../pic/教發6.png', import.meta.url).href,
      new URL('../pic/教發7.png', import.meta.url).href,
    ],
    description: '本專案為課程指定主題，旨在針對「輔大教發中心」現有網站進行全面性的視覺重構與架構優化。透過 純 HTML/CSS 技術，將原本資訊密度高、層級較為複雜、風格過時的官方網站，轉型為具備現代感、直覺導覽且符合學術專業形象的平台。'
  },
  {
    id: 3,
    title: '藝人資料庫',
    tags: ['個人', 'HTML', 'PHP','MySQL'],
    image: new URL('../pic/音樂資料庫.png', import.meta.url).href,
    images: [
      new URL('../pic/音樂資料庫.png', import.meta.url).href,
      new URL('../pic/音樂資料庫2.png', import.meta.url).href,
      new URL('../pic/音樂資料庫3.png', import.meta.url).href,
      new URL('../pic/音樂資料庫4.png', import.meta.url).href,
      new URL('../pic/音樂資料庫5.png', import.meta.url).href,
      new URL('../pic/音樂資料庫6.png', import.meta.url).href
    ],
    description: '本專案為應用資料庫管理課程所學之理論，開發一套具備完整後端邏輯的網站。從需求分析、ERD設計、資料表正規化到最後使用 PHP 串接 MySQL 資料庫，實現一個具備動態資料處理能力的系統。'
  },
  {
    id: 4,
    title: '輔大活動管理系統',
    tags: ['個人', 'HTML', 'PHP','MySQL'],
    image: new URL('../pic/活動管理.png', import.meta.url).href,
    images: [
      new URL('../pic/活動管理.png', import.meta.url).href,
      new URL('../pic/活動管理2.png', import.meta.url).href,
      new URL('../pic/活動管理3.png', import.meta.url).href,
    ],
    description: '本專案為針對輔大校園活動建立一套數位化管理平台。透過 PHP 串接 MySQL 資料庫，實現一個具備動態資料處理能力的系統，系統涵蓋了從前端活動瀏覽到後端資料存取的完整流程。<br>此外，本系統特別實作了使用者權限分級機制，透過區分「管理員」與「一般學生」之身分，此權限控管邏輯不僅確保了後端行政資料的安全性，也優化了不同身分使用者的操作體驗。'
  },
  {
    id: 5,
    title: 'WISHOP',
    tags: ['團隊', 'HTML', 'PHP','MySQL'],
    image: new URL('../pic/witshop.png', import.meta.url).href,
    images: [
      new URL('../pic/witshop.png', import.meta.url).href,
      new URL('../pic/witshop2.png', import.meta.url).href,
      new URL('../pic/witshop3.png', import.meta.url).href,
      new URL('../pic/witshop4.png', import.meta.url).href,
      new URL('../pic/witshop5.png', import.meta.url).href,
      new URL('../pic/witshop6.png', import.meta.url).href,
      new URL('../pic/witshop7.png', import.meta.url).href,
      new URL('../pic/witshop8.png', import.meta.url).href,
      new URL('../pic/witshop9.png', import.meta.url).href
    ],
    description: '本專案為專題前的核心開發實作，從主題發想至技術開發皆由團隊獨立完成。我們打造了一個結合「許願」與「團購」概念的雙向購物平台，旨在打破傳統電商單向販售的模式。<br>系統具備完善的商務邏輯，使用者可自由建立個人賣場、發起團購活動；此外，平台核心特色為「許願區」功能，使用者可發布感興趣的商品需求，讓賣家能精準掌握市場導向並主動對接供應。技術上整合了前端介面、後端邏輯與資料庫管理，成功建構出一套從需求觸發到交易完成的完整商業閉環流程。'
  },
  {
    id: 6,
    title: 'Memonity',
    tags: ['團隊', 'React', 'FastAPI','MySQL'],
    image: new URL('../pic/Memonity.png', import.meta.url).href,
    images: [
      new URL('../pic/Memonity.png', import.meta.url).href,
      new URL('../pic/Memonity2.png', import.meta.url).href,
      new URL('../pic/Memonity3.png', import.meta.url).href,
      new URL('../pic/Memonity4.png', import.meta.url).href,
      new URL('../pic/Memonity5.png', import.meta.url).href,
      new URL('../pic/Memonity6.png', import.meta.url).href,
      new URL('../pic/Memonity7.png', import.meta.url).href
    ],
    description: '本專案為初次挑戰前後端分離架構的實務實作，採用React構建動態前端互動介面，並結合 FastAPI 打造高效能後端 API，搭配 MySQL 資料庫儲存結構化數據。<br>系統以「動漫心得分享平台」為主題，除了核心的評論互動功能外，更整合了 Python 爬蟲技術 抓取「巴哈姆特動畫瘋」之數據。此功能讓使用者在新增動漫資料時，系統能自動填充相關資訊，大幅提升操作效率與資料準確性。<br>在開發過程中，我從零掌握了此種架構模式，成功克服跨領域技術整合的挑戰。這不僅是我技術成長幅度最大的一門課程，也讓我對現代全端開發流程有了紮實且完整的掌握。'
  },
  {
    id: 7,
    title: '海獺冰淇淋',
    tags: ['團隊', 'ASP.NET Web Forms'],
    image: new URL('../pic/ice.png', import.meta.url).href,
    images: [
      new URL('../pic/ice.png', import.meta.url).href,
      new URL('../pic/ice2.png', import.meta.url).href,
      new URL('../pic/ice3.png', import.meta.url).href,
      new URL('../pic/ice4.png', import.meta.url).href,
      new URL('../pic/ice5.png', import.meta.url).href,
      new URL('../pic/ice6.png', import.meta.url).href,
    ],
    description: '本專案使用 ASP.NET Web Forms 開發，實作一套功能完備的冰淇淋電商購物系統。系統涵蓋了前端使用者的商品瀏覽、購物車操作與訂單結帳流程，並建構了後端管理介面，實現賣家對商品上架、庫存維護及訂單狀態追蹤的全面管理。'
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
  <section class="Coursework-section">
    <div class="container">
      <div class="title-wrapper">
        <span class="title-bg-text">Coursework</span>
        <h2 class="section-title">課堂作品</h2>
        <div class="title-underline"></div>
      </div>

      <div class="projects-grid">
        <div v-for="item in projects" :key="item.id" class="small-card">
          <div class="card-img">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="card-body">
            <div class="tag-group">
              <span v-for="tag in item.tags" :key="tag" class="mini-tag">
                {{ tag }}
              </span>
            </div>
            <h3 class="item_title">{{ item.title }}</h3>
            <button @click="openModal(item)" class="detail-btn-small">
              查看詳情
            </button>
          </div>
        </div>
      </div>
    </div> 
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
              <p class="item_description" v-html="currentProject?.description"></p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.Coursework-section {
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

/* 網格佈局：限制最多三欄，且在小螢幕自動調整 */
.projects-grid {
  display: grid;
  /* 優先嘗試平分三欄，最小不低於 300px (防止卡片太擠) */
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px;
  width: 100%;
  max-width: 90%; /* 限制總寬度，防止在大螢幕分太開 */
  margin: 0 auto;
}

/* 響應式：針對平板與手機調整欄數 */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr); /* 平板顯示兩欄 */
    gap: 20px;
  }
}

@media (max-width: 650px) {
  .projects-grid {
    grid-template-columns: 1fr; /* 手機顯示一欄 */
    max-width: 400px; /* 手機版限制卡片不要太寬 */
  }
}

/* 確保小卡片在任何寬度下都美觀 */
.small-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* 增加一點彈跳感 */
  display: flex;
  flex-direction: column;
  height: 100%; /* 讓所有卡片高度齊平 */
}

/* 確保按鈕始終在底部 */
.card-body {
  padding: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 自動撐開空間 */
}

.small-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary-color);
  box-shadow: 0 10px 30px rgba(163, 147, 235, 0.15);
}

.card-img img {
  width: 100%;
  height: 200px;
  object-fit: cover;
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

.detail-btn-small {
  margin-top: 15px;
  background: none;
  border: 1.5px solid var(--primary-color);
  color: var(--primary-color);
  padding: 6px 20px;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.detail-btn-small:hover {
  background: var(--primary-color);
  color: white;
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