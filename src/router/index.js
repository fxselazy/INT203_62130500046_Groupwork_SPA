import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewTimerPage from '@/views/NewTimerPage.vue';
import TimerList from '@/views/TimerList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newTimer',
    name: 'NewTimer',
    component: NewTimerPage
  },
  {
    path: '/timerlist',
    name: "TimerList",
    component: TimerList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
