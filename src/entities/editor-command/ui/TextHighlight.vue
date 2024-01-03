<script setup lang="ts">
import { ref, watch } from 'vue'

import { Highlighter } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@shadcn/ui/dropdown-menu'
import { Input } from '@shadcn/ui/input'

import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{ editor: Editor }>()

const isOpen = ref(false)
const color = ref('')

const handleClick = (): void => {
  if (editor.getAttributes('highlight').color) {
    editor.chain().focus().unsetHighlight().run()
  } else {
    isOpen.value = true
  }
}

watch(color, () => {
  if (color.value) {
    editor.chain().focus().toggleHighlight({ color: color.value }).run()
  }
})

watch(isOpen, () => {
  if (!isOpen.value) {
    color.value = ''
  }

  if (editor.getAttributes('highlight').color) {
    color.value = editor.getAttributes('highlight').color
  }
})
</script>

<template>
  <DropdownMenu :open="isOpen">
    <DropdownMenuTrigger as-child>
      <Button size="icon" variant="secondary" @click="handleClick">
        <Highlighter :color="editor.getAttributes('highlight').color" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="border-none bg-transparent"
      @interact-outside="isOpen = false"
    >
      <Input type="color" v-model="color" />
    </DropdownMenuContent>
  </DropdownMenu>
</template>
