<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import { useClipboard, useLocalStorage } from '@vueuse/core'

import { useToast } from '@shadcn/ui/toast'

import dayjs from 'dayjs'

import { DocumentInfo } from '@features/document-info'
import { TiptapEditor } from '@features/tiptap-editor'

import { DOCUMENT_PREFIX, POSTS_LOADED_KEY } from '@constants/storage'

import type { DocumentData } from '@typings/document'
import type { MessageSchema } from '@typings/locale'

const route = useRoute()

const documentId = route.params.documentId.toString()

const documentData = useLocalStorage<DocumentData>(
  `${DOCUMENT_PREFIX}${documentId}`,
  {
    id: documentId,
    title: '',
    description: '',
    date: dayjs(),
  },
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

const { t } = useI18n<{ message: MessageSchema }>()

const { copy, copied, isSupported } = useClipboard()

const { toast } = useToast()

useLocalStorage(POSTS_LOADED_KEY, true)

const handleInvite = (): void => {
  copy(window.location.href)
}

watch(copied, () => {
  if (copied.value) {
    toast({
      title: t('toast.invite'),
    })
  }
})
</script>

<template>
  <div class="flex grow flex-col gap-5 2xl:flex-row">
    <DocumentInfo
      v-model:title="documentData.title"
      v-model:description="documentData.description"
      :document-id="documentId"
      :can-invite="isSupported"
      @invite="handleInvite"
    />
    <TiptapEditor :document-id="documentId" />
  </div>
</template>
