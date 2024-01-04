<script setup lang="ts">
import { Heading } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shadcn/ui/dropdown-menu'

import { useTextSize } from '../model/use-text-size'

import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{ editor: Editor }>()

const textSizes = useTextSize(editor)
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        size="icon"
        class="hidden 2xl:flex"
        :variant="editor.isActive('heading') ? 'default' : 'secondary'"
      >
        <Heading />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <template v-for="(textSize, index) in textSizes" :key="textSize.key">
        <DropdownMenuItem :class="textSize.class" @click="textSize.onClick">
          <component :is="textSize.icon" class="mr-2 h-4 w-4" />
          <span>{{ textSize.text }}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator v-if="index !== textSizes.length - 1" />
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
