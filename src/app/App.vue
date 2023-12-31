<script setup lang="ts">
import Layout from '@pages/Layout.vue'
</script>

<template>
  <Layout>
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </Layout>
</template>
