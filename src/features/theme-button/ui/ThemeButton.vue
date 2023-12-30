<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

import { Sun, Moon } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button @click="toggleDark(!isDark)" size="icon">
    <Sun v-if="isDark" />
    <Moon v-else />
  </Button>
</template>
