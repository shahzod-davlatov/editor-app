<script setup lang="ts">
import { Button } from '@shadcn/ui/button'
import { Separator } from '@shadcn/ui/separator'

import { useTextStyle } from '../model/use-text-style'

import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{ editor: Editor }>()

const textStyles = useTextStyle(editor)
</script>

<template>
  <div class="hidden h-12 items-center gap-2 md:flex">
    <template v-for="(textStyle, index) in textStyles" :key="textStyle.key">
      <Button
        size="icon"
        :variant="textStyle.variant"
        :disabled="textStyle.disabled"
        @click="textStyle.onClick"
      >
        <component :is="textStyle.icon" />
      </Button>
      <Separator
        v-if="index !== textStyles.length - 1"
        orientation="vertical"
      />
    </template>
  </div>
</template>
