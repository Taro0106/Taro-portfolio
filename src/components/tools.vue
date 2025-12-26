<template>
    <section class="tools-section">
        <div class="container">
            <div class="title-wrapper">
                <span class="title-bg-text">Skills</span> <h2 class="section-title">擅長工具</h2>
                <div class="title-underline"></div>
            </div>
            
            <div class="tools-grid">
                <div class="tool-card">
                    <div class="card-header">
                        <h3 style="color: var(--text-main);">前端</h3>
                    </div>
                    <div class="pill-group">
                        <span class="tech-pill">Vue.js</span>
                        <span class="tech-pill">React.js</span>
                        <span class="tech-pill">JavaScript</span>
                        <span class="tech-pill">HTML / CSS</span>
                    </div>
                </div>

                <div class="tool-card">
                    <div class="card-header">
                        <h3 style="color: var(--text-main);">後端</h3>
                    </div>
                    <div class="pill-group">
                        <span class="tech-pill">Python</span>
                        <span class="tech-pill">FastAPI</span>
                        <span class="tech-pill">ASP.NET Web Forms</span>
                    </div>
                </div>

                <div class="tool-card">
                    <div class="card-header">
                        <h3 style="color: var(--text-main);">資料庫</h3>
                    </div>
                    <div class="pill-group">
                        <span class="tech-pill">MS SQL</span>
                        <span class="tech-pill">MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.tools-section {
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

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;
}

.tool-card {
  background: white;
  padding: 30px 20px;
  border-radius: 20px;
  border: 1.5px solid #f0f0f5;
  box-shadow: 0 10px 30px rgba(163, 147, 235, 0.08);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center; 
}

.tool-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-light);
}

.card-header {
  flex-direction: column; 
  gap: 8px;
  margin-bottom: 20px;
  text-align: center;
}

.category-icon {
  font-size: 2rem;
}

.card-header h3 {
  font-size: 1.15rem; 
  color: #4a4a68;
  font-weight: 800;
  margin: 0;
}

.pill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center; 
}

.tech-pill {
  border: 1.5px solid var(--primary-light);
  color: #5a5a82; 
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  background: white;
  transition: all 0.2s;
}

@media (max-width: 900px) {
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: 1.6rem;
  }
}
</style>