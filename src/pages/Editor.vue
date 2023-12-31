<script setup lang="ts">
import { useRoute } from 'vue-router'

import { useLocalStorage } from '@vueuse/core'

import { Input } from '@shadcn/ui/input'
import { Textarea } from '@shadcn/ui/textarea'

import { DOCUMENT_PREFIX } from '@constants/storage'

import type { DocumentCardData } from '@typings/document'

const route = useRoute()

const documentData = useLocalStorage<DocumentCardData>(
  `${DOCUMENT_PREFIX}${route.params.documentId}`,
  null,
  {
    serializer: {
      read(raw) {
        return JSON.parse(raw)
      },
      write(value) {
        return JSON.stringify(value)
      },
    },
  }
)
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <div class="flex w-full flex-col gap-5 md:w-1/3">
      <Input v-model="documentData.title" />
      <Textarea v-model="documentData.description" rows="10" />
    </div>
    <div class="grow border">Editor placeholder</div>
  </div>
</template>
