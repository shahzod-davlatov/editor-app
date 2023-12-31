import { createRouter, createWebHistory } from 'vue-router'

import Editor from '@pages/Editor.vue'
import Home from '@pages/Home.vue'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/:documentId',
    component: Editor,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
