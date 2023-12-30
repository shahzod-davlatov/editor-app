<script setup lang="ts">
import { Github } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'

import { NavigationMenu } from '@widgets/navigation-menu'
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <div class="p-5"><NavigationMenu /></div>
    <div class="grow">
      <slot />
    </div>
    <div class="flex items-center justify-end gap-3 p-5">
      <span class="text-primary">Shahzod Davlatov</span>
      <Button size="icon" variant="link" as-child>
        <a href="https://github.com/shahzod418" target="_blank">
          <Github />
        </a>
      </Button>
    </div>
  </div>
</template>
