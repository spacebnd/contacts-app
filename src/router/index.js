import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactsLayout from '../views/ContactsLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ContactsLayout',
    component: ContactsLayout,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
