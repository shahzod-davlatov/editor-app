import { createRouter, createWebHistory } from 'vue-router'

import Home from '@pages/Home.vue'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [{ path: '/', component: Home }]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
