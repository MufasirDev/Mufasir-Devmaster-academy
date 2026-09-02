
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Courses from '../pages/Courses.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Register from '../pages/Register.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

export default router
