<script setup>
import { ref } from 'vue'
const projects = ref([
  {
    id: 1,
    title: 'Favory(開發中)',
    tags: ['個人','Vue','Firebase','Cloudinary'],
    image: 'https://i.pinimg.com/736x/53/92/3b/53923bab15a5e35571859fe8576cb874.jpg',
    images: [
      'https://i.pinimg.com/736x/53/92/3b/53923bab15a5e35571859fe8576cb874.jpg'
    ],
    description: '因 GitHub Pages 只能部署靜態網站，我想練習串接資料庫，於是開發了這個收藏與紀錄平台，讓使用者管理自己喜歡的動漫、漫畫、電影等作品。前端使用 Vue，後端資料儲存採用 Firebase，圖片則透過 Cloudinary 儲存，使收藏清單可以動態呈現作品封面與相關資訊。<br>目前還在利用課餘時間慢慢開發中'
  }
])

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
        <span class="title-bg-text">Other Projects</span>
        <h2 class="section-title">其他作品</h2>
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
  color: var(--primary-color);  
  font-weight: 850;   
  letter-spacing: 4px; 
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
  opacity: 0.4; 
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 10px;
  pointer-events: none;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px;
  width: 100%;
  max-width: 90%; 
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px;
  }
}

@media (max-width: 650px) {
  .projects-grid {
    grid-template-columns: 1fr; 
    max-width: 400px; 
  }
}

.small-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
  display: flex;
  flex-direction: column;
  height: 100%; 
}


.card-body {
  padding: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
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
  color: var(--text-main);  
  font-weight: 850;   
  position: relative;
  z-index: 2;
  margin: 0;
}

.item_description {
  font-size: 18px;
  color: var(--text-muted);  
  font-weight: 500;   
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

.modal-overlay {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(30, 30, 45, 0.5); 
  backdrop-filter: blur(10px); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; 
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

.modal-left {
  flex: 1.6;
  overflow-y: auto;
  background: #fdfdfd;
  padding: 30px;
  border-right: 1px solid #f0f0f5;
}

.modal-left::-webkit-scrollbar {
  width: 6px; 
}

.modal-left::-webkit-scrollbar-track {
  background: rgba(240, 240, 245, 0.5); 
  border-radius: 10px;
}

.modal-left::-webkit-scrollbar-thumb {
  background: var(--primary-light); 
  border-radius: 10px;
  border: 1px solid transparent; 
  transition: background 0.3s ease;
}

.modal-left::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color); 
}

.modal-left {
  scrollbar-width: thin;
  scrollbar-color: var(--primary-light) transparent;
}

.modal-gallery-img {
  width: 100%;
  height: auto; 
  display: block;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 25px;
  border: 1px solid #eee;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}

.modal-right {
  flex: 1;
  padding: 50px 40px;
  overflow-y: auto;
  background: #fafafa;
}

.modal-right::-webkit-scrollbar {
  width: 6px; 
}


.modal-right::-webkit-scrollbar-track {
  background: rgba(240, 240, 245, 0.5); 
  border-radius: 10px;
}

.modal-right::-webkit-scrollbar-thumb {
  background: var(--primary-light); 
  border-radius: 10px;
  border: 1px solid transparent; 
  transition: background 0.3s ease;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .modal-layout { flex-direction: column; }
  .modal-left { flex: 1; max-height: 50%; }
  .modal-content { width: 95%; height: 90vh; }
}

:deep(.text-link) {
  margin-top: 28px;
  font-size: 0.95rem;
  color: var(--text-muted);
}

:deep(.text-link a) {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  position: relative;
}

:deep(.text-link a::after) {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: var(--primary-color);
  transform: scaleX(0);
  transition: transform 0.25s ease;
}

:deep(.text-link a:hover::after) {
  transform: scaleX(1);
}

:deep(.divider) {
  margin: 0 8px;
  color: #bbb;
}


:deep(.detail-btn) {
  padding: 8px 24px;
  background: white;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

:deep(.detail-btn:hover) {
  background: var(--primary-color);
  color: white;
  box-shadow: 0 0 20px rgba(163, 147, 235, 0.4);
  transform: translateY(-2px);
}

</style>