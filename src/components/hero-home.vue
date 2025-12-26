<script setup>

</script>

<template>
    <div class="home-container">
        <div class="container">
            <section class="hero-clean">
                <div class="image-box">
                <div class="circle-decoration"></div>
                <img src="https://i.pinimg.com/736x/53/92/3b/53923bab15a5e35571859fe8576cb874.jpg" alt="Taro" class="avatar" />
                </div>

                <div class="text-box">
                    <div class="intro-badge">Personal Portfolio</div>
                    <h1 class="main-title">
                        Taro <span class="cn-name">呂鈺婷 YU-TING,LU</span>
                    </h1>
            
                    <div class="meta-info">
                        <span class="meta-pill">輔仁大學</span>
                        <span class="meta-pill">資訊管理學系</span>
                        <span class="meta-pill">4年級</span>
                    </div>

                    <p class="summary">
                        我喜歡網頁設計，享受把想法一步步實作成畫面的過程，並思考如何讓使用者在操作時感到直覺又順暢，希望每個細節都能讓使用者感到舒服且好上手。
                    </p>

                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.home-container {
  padding: 100px 0; 
  background-color: #faf9fe; 
}

.hero-clean {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  max-width: 900px;
  margin: 0 auto;
}

.image-box {
  position: relative;
  width: 220px; 
  height: 220px;
}

.circle-decoration {
  position: absolute;
  inset: -10px;
  border: 2px dashed var(--primary-light);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid #fff;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.text-box {
  flex: 1;
  text-align: left;
}

.intro-badge {
  color: var(--primary-color);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.main-title {
  font-size: 3rem;
  color: var(--primary-color);
  margin: 0 0 15px 0;
  display: flex;
  align-items: baseline;
  gap: 15px;
}

.cn-name {
  font-size: 1.2rem;
  color: var(--text-muted);
  font-weight: 500;
}

.meta-info {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px; 
}

.meta-pill {
  background-color: transparent; 
  border: 2px solid var(--primary-color); 
  color: var(--primary-color); 
  font-weight: 500; 
  font-size: 14px;
  padding: 4px 14px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  letter-spacing: 0.5px;
}

.summary {
  font-weight: 500;
  color: #5a5a75;
  line-height: 1.8;
  margin-top: 10px;
  border-left: 3px solid var(--primary-light); 
  padding-left: 15px;
  font-size: 16px;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .hero-clean {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
  .text-box {
    text-align: center;
  }
  .main-title {
    justify-content: center;
    font-size: 2.5rem;
  }
  .meta-info {
    justify-content: center;
  }
}
</style>