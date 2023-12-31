<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { FilePlus } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'

import type { MessageSchema } from '@typings/locale'

const { t } = useI18n<{ message: MessageSchema }>()
</script>

<template>
  <Button variant="secondary">
    <FilePlus class="mr-2 h-4 w-4" /> {{ t('button.add') }}
  </Button>
</template>
