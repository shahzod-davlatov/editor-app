<script setup lang="ts">
import { Toaster } from '@shadcn/ui/toast'

import Layout from '@pages/Layout.vue'
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
  <Toaster />
</template>
