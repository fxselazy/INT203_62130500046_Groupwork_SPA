import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import AddTimerForm from '@/components/AddTimerForm.vue';

createApp(App).component("add-timer-form", AddTimerForm)
.use(router)
.mount('#app')
