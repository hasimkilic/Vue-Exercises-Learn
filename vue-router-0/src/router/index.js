import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/contact',
    name:'contact',
    component:ContactView
  }
]

const router = createRouter({
  //history  :createWebHistory(process.env.BASE_URL) # bu işaret kullanmaz
  history: createWebHashHistory(process.env.BASE_URL), // # Bu işareti linke ekler ve daha güvenli bir rounting işlemi gerçekleşir. Bu kullanım tavsiye edilir.
  routes
})

export default router
