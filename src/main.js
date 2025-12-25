//import './assets/main.css'
import './assets/base.css' // 引入全域變數
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
