<script setup>
import { ref } from 'vue'

const gradeList = ref([
  { course: '程式設計概論', techs: ['Python'], score: 99, project: '-' },
  { course: 'web前端設計', techs: ['HTML / CSS'], score: 94, project: '犀牛沙發工廠、輔大教發中心' },
  { course: 'WEB程式設計', techs: ['MySQL', 'PHP', 'HTML / CSS'], score: 98, project: '輔大活動管理系統' },
  { course: '資料庫管理', techs: ['ERD'], score: 99, project: '藝人資料庫' },
  { course: '系統分析與設計', techs: ['MySQL', 'PHP', 'HTML / CSS'], score: 96, project: 'WISHOP' },
  { course: '進階Web程式設計', techs: ['React', 'FastAPI', 'MySQL'], score: 98, project: 'Memonity' },
  { course: '資訊系統專題', techs: ['Vue', 'FastAPI', 'MS SQL'], score: 90, project: '新手業務員輔助系統' },
  { course: '網站架設與建置實務', techs: ['WordPress', 'Drupal'], score: '在學中', project: '-' },
  { course: '網頁程式設計', techs: ['ASP.NET Web Forms'], score: '在學中', project: '海獺冰淇淋' },
])
</script>

<template>
  <section class="grades-section">
    <div class="grades-container">
      <table class="grades-table">
        <thead>
          <tr>
            <th>課程名稱</th>
            <th>核心技術</th>
            <th>成績</th>
            <th>產出作品</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in gradeList" :key="index">
            <td data-label="課程名稱">{{ item.course }}</td>
            <td data-label="核心技術">
              <div class="tech-wrapper">
                <span v-for="tech in item.techs" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </td>
            <td data-label="成績" class="grade-score">{{ item.score }}</td>
            <td data-label="產出作品">{{ item.project || '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.grades-section {
  padding: 60px 0;
}

.grades-container {
  max-width: 90%;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- 回歸你原本的紫色表格外觀 --- */
.grades-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 20px; /* 回歸圓角 */
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(163, 147, 235, 0.1); /* 回歸淡紫色陰影 */
  border: 1px solid #f0f0f5;
  text-align: center;
}

.grades-table thead {
  background: var(--primary-color); /* 回歸芋頭紫 */
  color: white;
}

.grades-table th {
  padding: 20px;
  font-weight: 800;
  letter-spacing: 1px;
}

.grades-table td {
  padding: 20px;
  border-bottom: 1px solid #f8f8fb;
  color: var(--text-main);
  font-weight: 500;
}

.grades-table tbody tr:hover {
  background-color: rgba(163, 147, 235, 0.03);
  transition: background 0.3s;
}

.grade-score {
  font-weight: 850;
  color: var(--primary-color) !important;
  font-size: 1.1rem;
}

.tech-tag {
  background: #f3f0ff; /* 回歸淺紫色標籤 */
  color: var(--primary-color);
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  margin: 3px;
  display: inline-block;
}

.tech-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* --- 只針對手機版 (425px) 做結構調整，外觀依然維持紫色系 --- */
@media (max-width: 768px) {
  .grades-table, 
  .grades-table thead, 
  .grades-table tbody, 
  .grades-table th, 
  .grades-table td, 
  .grades-table tr {
    display: block;
    width: 100%;
  }

  .grades-table {
    background: transparent;
    box-shadow: none;
    border: none;
  }

  .grades-table thead {
    display: none;
  }

  .grades-table tr {
    background: #fff;
    border-radius: 15px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #f0f0f5;
    box-shadow: 0 5px 15px rgba(163, 147, 235, 0.08);
  }

  .grades-table td {
    text-align: right;
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f9f9fb;
  }

  .grades-table td:last-child {
    border-bottom: none;
  }

  .grades-table td::before {
    content: attr(data-label);
    font-weight: 800;
    color: var(--primary-color); /* 標籤也用你的紫色 */
    font-size: 0.85rem;
  }

  .tech-wrapper {
    justify-content: flex-end;
  }
}
</style>