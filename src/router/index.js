import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetup',
    name: 'Meetup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Meetup.vue')
  },
  {
    path: '/event/:id',
    name: 'event',
    props: true,
    component: () => import('@/views/Event.vue'),
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/components/Create.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
