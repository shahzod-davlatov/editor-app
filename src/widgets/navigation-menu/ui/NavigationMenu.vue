<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { LocaleButton } from '@features/locale-button'
import { ThemeButton } from '@features/theme-button'

import { Icons } from '@assets/icons'

import type { MessageSchema } from '@typings/locale'

const { t } = useI18n<{ message: MessageSchema }>()
</script>

<template>
  <nav class="flex items-center gap-5">
    <RouterLink
      to="/"
      class="flex items-center gap-3 text-2xl text-primary md:text-4xl"
    >
      <Icons.Markdown class="h-10 w-10 fill-primary md:h-14 md:w-14" />
      <span>{{ t('navigation-menu.title') }}</span>
    </RouterLink>
    <ThemeButton class="ml-auto" />
    <LocaleButton />
  </nav>
</template>
