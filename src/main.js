import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import TimerForm from '@/components/TimerForm.vue';

createApp(App).component("timer-form", TimerForm)
.use(router)
.mount('#app')
