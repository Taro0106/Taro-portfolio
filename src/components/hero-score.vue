<script setup>

</script>

<template>
  <section class="project-hero">
    <div class="container">
      <div class="hero-content">
        <span class="badge">Academic Records</span>
        <h1 class="title">課堂成績</h1>
        
        <div class="hero-subtitle">
          <span class="subtitle">榮獲3次書卷獎</span>
          <span class="divider"></span>
          <a href="https://drive.google.com/file/d/1lWt-Y3tLgD7fmuOBzTytum7CmqCmjh3d/view?usp=sharing" target="_blank" class="transcript-link">
            <button class="detail-btn">
              <span>查看完整成績單</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-hero {
  padding: 120px 0 80px;
  background: #faf9fe;
  text-align: center;
}

.badge {
  color: var(--primary-color);
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 0.9rem;
  text-transform: uppercase;
  border: 1.5px solid var(--primary-light);
  padding: 4px 12px;
  border-radius: 50px;
  display: inline-block;
  margin-bottom: 20px;
}

.title {
  font-size: 3rem;
  color: var(--text-main);
  font-weight: 850;
  margin-bottom: 20px;
}

.hero-subtitle {
  display: flex;
  align-items: center; /* 關鍵：確保文字與按鈕中心點對齊 */
  justify-content: center;
  gap: 20px;
  font-size: 1.1rem;
  
}

.subtitle{
  color: var(--primary-dark);
  font-weight: bold;
}

.divider {
  width: 1.5px;
  height: 24px; /* 稍微拉長一點配合按鈕高度 */
  background-color: var(--text-main);
  opacity: 0.3;
}

.detail-btn {
  /* 移除 margin-top，因為在 flex 容器內不需要它來推開位子 */
  margin-top: 0; 
  padding: 8px 24px; /* 稍微縮減 padding 讓它跟文字並排時比例更和諧 */
  background: white;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none; /* 移除超連結底線 */
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

/* Hover 效果保持不變 */
.detail-btn:hover {
  background: var(--primary-color);
  color: white;
  box-shadow: 0 0 20px rgba(163, 147, 235, 0.4);
  transform: translateY(-2px);
}

.transcript-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.3s;
}

.transcript-link:hover {
  opacity: 0.7;
}

</style>