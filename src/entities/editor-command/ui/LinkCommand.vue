<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { Link } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@shadcn/ui/dropdown-menu'
import { Input } from '@shadcn/ui/input'

import type { Editor } from '@tiptap/vue-3'
import type { MessageSchema } from '@typings/locale'

const { editor } = defineProps<{ editor: Editor }>()

const isOpen = ref(false)
const link = ref('')

const { t } = useI18n<{ message: MessageSchema }>()

const handleClick = (): void => {
  if (link.value) {
    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: link.value })
      .run()
  } else {
    editor.chain().focus().extendMarkRange('link').unsetLink().run()
  }

  isOpen.value = false
}

watch(isOpen, () => {
  if (!isOpen.value) {
    link.value = ''
  }

  if (editor.getAttributes('link').href) {
    link.value = editor.getAttributes('link').href
  }
})
</script>

<template>
  <DropdownMenu :open="isOpen">
    <DropdownMenuTrigger as-child>
      <Button
        size="icon"
        :variant="editor.isActive('link') ? 'default' : 'secondary'"
        @click="isOpen = true"
      >
        <Link />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="flex w-full max-w-sm items-center gap-2 p-3"
      @interact-outside="isOpen = false"
    >
      <Input placeholder="URL" v-model="link" />
      <Button @click="handleClick">{{ t('button.add') }}</Button>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
