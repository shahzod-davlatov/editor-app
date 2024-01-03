<script setup lang="ts">
import { ref, watch } from 'vue'

import { Baseline } from 'lucide-vue-next'

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
  if (editor.getAttributes('textStyle').color) {
    editor.chain().focus().unsetColor().run()
  } else {
    isOpen.value = true
  }
}

watch(color, () => {
  if (color.value) {
    editor.chain().focus().setColor(color.value).run()
  }
})

watch(isOpen, () => {
  if (!isOpen.value) {
    color.value = ''
  }

  if (editor.getAttributes('textStyle').color) {
    color.value = editor.getAttributes('textStyle').color
  }
})
</script>

<template>
  <DropdownMenu :open="isOpen">
    <DropdownMenuTrigger as-child>
      <Button size="icon" variant="secondary" @click="handleClick">
        <Baseline :color="editor.getAttributes('textStyle').color" />
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
