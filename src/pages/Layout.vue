<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { Github } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'

import { NavigationMenu } from '@widgets/navigation-menu'

import type { MessageSchema } from '@typings/locale'

const { t } = useI18n<{ message: MessageSchema }>()
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <div class="p-5"><NavigationMenu /></div>
    <div class="grow px-5">
      <slot />
    </div>
    <div class="flex justify-end p-5">
      <a
        href="https://github.com/shahzod418"
        target="_blank"
        class="flex items-center gap-3 text-primary"
      >
        <span>{{ t('footer.author') }}</span>
        <Button size="icon" variant="link">
          <Github />
        </Button>
      </a>
    </div>
  </div>
</template>
