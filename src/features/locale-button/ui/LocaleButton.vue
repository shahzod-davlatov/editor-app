<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useLocalStorage } from '@vueuse/core'

import { Languages } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'

import { DEFAULT_LOCALE, ADDITIONAL_LOCALE } from '@constants/locale'
import { LANGUAGE_KEY } from '@constants/storage'

import type { SUPPORT_LOCALES } from '@constants/locale'

const { locale } = useI18n<{
  locale: (typeof SUPPORT_LOCALES)[number]
}>()

const language = useLocalStorage(LANGUAGE_KEY, locale.value)

const toggleLanguage = (): void => {
  const newLanguage =
    locale.value === DEFAULT_LOCALE ? ADDITIONAL_LOCALE : DEFAULT_LOCALE

  language.value = newLanguage
  locale.value = newLanguage
}
</script>

<template>
  <Button @click="toggleLanguage" size="icon"><Languages /></Button>
</template>
