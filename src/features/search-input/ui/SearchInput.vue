<script setup lang="ts">
import { defineModel } from 'vue'
import { useI18n } from 'vue-i18n'

import { Input } from '@shadcn/ui/input'
import { Label } from '@shadcn/ui/label'

import type { MessageSchema } from '@typings/locale'

const modelValue = defineModel({ type: String })

const { t } = useI18n<{ message: MessageSchema }>()
</script>

<template>
  <div class="grid w-full items-center gap-1.5 md:w-1/3">
    <Label for="search">{{ t('input.search.label') }}</Label>
    <Input
      id="search"
      :placeholder="t('input.search.placeholder')"
      v-model="modelValue"
    />
  </div>
</template>
