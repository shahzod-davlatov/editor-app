<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { Users, ChevronsUpDown } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@shadcn/ui/collapsible'
import { Input } from '@shadcn/ui/input'
import { Textarea } from '@shadcn/ui/textarea'

import { useLiveInfo } from '@entities/live-info'

import type { MessageSchema } from '@typings/locale'

const {
  documentId,
  title,
  description,
  canInvite = false,
  rows = 4,
} = defineProps<{
  documentId: string
  title: string | number
  description: string | number
  canInvite?: boolean
  rows?: number
}>()

const emit = defineEmits<{
  'update:title': [value: string | number]
  'update:description': [value: string | number]
  invite: []
}>()

const isOpen = ref(false)

const { t } = useI18n<{ message: MessageSchema }>()

const {
  liveTitle,
  liveDescription,
  handleLiveTitleInput,
  handleLiveDescriptionInput,
} = useLiveInfo({ documentId, title, description })

watch(liveTitle, () => {
  emit('update:title', liveTitle.value)
})

watch(liveDescription, () => {
  emit('update:description', liveDescription.value)
})
</script>

<template>
  <Collapsible v-model:open="isOpen" class="flex flex-col gap-5 md:grow">
    <div class="flex items-center justify-between gap-5">
      <Input
        type="text"
        :model-value="liveTitle"
        @update:model-value="handleLiveTitleInput"
      />
      <CollapsibleTrigger as-child>
        <Button size="icon">
          <ChevronsUpDown />
        </Button>
      </CollapsibleTrigger>
    </div>
    <CollapsibleContent>
      <div class="flex flex-col gap-5 md:grow">
        <Textarea
          :model-value="liveDescription"
          @update:model-value="handleLiveDescriptionInput"
          :rows="rows"
        />
        <div class="flex justify-end gap-5">
          <Button v-if="canInvite" variant="ghost" @click="emit('invite')">
            <Users class="mr-2 h-4 w-4" /> {{ t('button.invite') }}
          </Button>
        </div>
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>
