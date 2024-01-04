<script setup lang="ts">
import { Button } from '@shadcn/ui/button'
import { Separator } from '@shadcn/ui/separator'

import { useTextAlign } from '../model/use-text-align'

import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{ editor: Editor }>()

const textAligns = useTextAlign(editor)
</script>

<template>
  <div class="hidden h-12 items-center gap-2 2xl:flex">
    <template v-for="(textAlign, index) in textAligns" :key="textAlign.key">
      <Button
        size="icon"
        :variant="textAlign.variant"
        @click="textAlign.onClick"
      >
        <component :is="textAlign.icon" />
      </Button>
      <Separator
        v-if="index !== textAligns.length - 1"
        orientation="vertical"
      />
    </template>
  </div>
</template>
