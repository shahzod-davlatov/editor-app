<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { FileEdit } from 'lucide-vue-next'

import { LocaleButton } from '@features/locale-button'
import { ThemeButton } from '@features/theme-button'

import type { MessageSchema } from '@typings/locale'

const { t } = useI18n<{ message: MessageSchema }>()
</script>

<template>
  <nav class="flex items-center gap-5">
    <div class="flex items-center gap-3 text-2xl text-primary md:text-4xl">
      <FileEdit class="h-10 w-10 md:h-12 md:w-12" />
      <span>{{ t('navigation-menu.title') }}</span>
    </div>
    <ThemeButton class="ml-auto" />
    <LocaleButton />
  </nav>
</template>
