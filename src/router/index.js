import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      prev: null, 
      next: 'About'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      prev: 'Main',
      next: 'Projects'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      prev: 'About', 
      next: null
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
