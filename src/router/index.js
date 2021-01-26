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
    path: '/explore',
    name: 'Explore',
    component: () => import(/* webpackChunkName: "explore" */ '../views/Explore.vue'),
    children: [
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('../components/explore/Blog.vue')
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('../components/explore/News.vue')
      }
    ]
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue'),
    children: [
      {
        path: 'latest',
        name: 'Latest',
        component: () => import('../components/store/Latest.vue')
      },
      {
        path: 'collections',
        name: 'Collections',
        component: () => import('../components/store/Collections.vue')
      },
      {
        path: 'deals',
        name: 'Deals',
        component: () => import('../components/store/Deals.vue')
      },
      {
        path: 'ps5',
        name: 'PS5',
        component: () => import('../components/store/PS5.vue')
      },
      {
        path: 'subscriptions',
        name: 'Subscriptions',
        component: () => import('../components/store/Subscriptions.vue')
      },

    ]
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import(/* webpackChunkName: "library" */ '../views/Library.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
