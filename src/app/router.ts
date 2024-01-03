import { createRouter, createWebHistory } from 'vue-router'

import Document from '@pages/Document.vue'
import Home from '@pages/Home.vue'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/:documentId',
    component: Document,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
