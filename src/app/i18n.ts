import { createI18n } from 'vue-i18n'

import messages from '@assets/translation'

import { DEFAULT_LOCALE } from '@constants/locale'

import type { SUPPORT_LOCALES } from '@constants/locale'
import type { MessageSchema } from '@typings/locale'

export const i18n = createI18n<
  [MessageSchema],
  (typeof SUPPORT_LOCALES)[number]
>({
  legacy: false,
  locale: localStorage.getItem('language') || navigator.language,
  fallbackLocale: DEFAULT_LOCALE,
  messages,
})
