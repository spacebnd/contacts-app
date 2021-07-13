import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Contacts from '../views/Contacts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
