<script setup lang="ts">
import { Type } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shadcn/ui/dropdown-menu'

import { useFontFamily } from '../model/use-font-family'

import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{ editor: Editor }>()

const fontFamilies = useFontFamily(editor)
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button size="icon" variant="secondary" class="hidden 2xl:flex">
        <Type />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <template
        v-for="(fontFamily, index) in fontFamilies"
        :key="fontFamily.key"
      >
        <DropdownMenuItem :class="fontFamily.class" @click="fontFamily.onClick">
          {{ fontFamily.text }}
        </DropdownMenuItem>
        <DropdownMenuSeparator v-if="index !== fontFamilies.length - 1" />
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
