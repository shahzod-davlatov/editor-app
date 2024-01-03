<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { Button } from '@shadcn/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@shadcn/ui/dropdown-menu'
import { Input } from '@shadcn/ui/input'

import { defaultName, defaultColor } from '@constants/editor'

import type { Editor } from '@tiptap/vue-3'
import type { MessageSchema } from '@typings/locale'

const { editor } = defineProps<{ editor: Editor }>()

const { t } = useI18n<{ message: MessageSchema }>()

const isOpen = ref(false)
const name = ref(defaultName)
const color = ref(defaultColor)

const handleSave = (): void => {
  editor.commands.updateUser({
    name: name.value,
    color: color.value,
  })

  isOpen.value = false
}
</script>

<template>
  <DropdownMenu :open="isOpen">
    <DropdownMenuTrigger as-child>
      <div
        :class="[
          'relative',
          'ml-auto',
          'h-9',
          'w-9',
          'cursor-pointer',
          'rounded-full',
          'before:absolute',
          'before:left-1/2',
          'before:top-1/2',
          'before:h-10',
          'before:w-10',
          'before:-translate-x-1/2',
          'before:-translate-y-1/2',
          'before:rounded-full',
          'before:bg-inherit',
          'before:blur',
        ]"
        :style="{ backgroundColor: color }"
        @click="isOpen = true"
      />
    </DropdownMenuTrigger>
    <DropdownMenuContent class="p-3" @interact-outside="isOpen = false">
      <div class="flex flex-col gap-3">
        <Input type="text" v-model:model-value="name" />
        <Input type="color" v-model:model-value="color" />
        <Button @click="handleSave">{{ t('button.save') }}</Button>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
