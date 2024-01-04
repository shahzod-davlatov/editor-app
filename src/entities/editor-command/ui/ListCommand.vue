<script setup lang="ts">
import { Button } from '@shadcn/ui/button'
import { Separator } from '@shadcn/ui/separator'

import { useListButton } from '../model/use-list-button'

import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{ editor: Editor }>()

const listButtons = useListButton(editor)
</script>

<template>
  <div class="hidden h-12 items-center gap-2 2xl:flex">
    <template v-for="(listButton, index) in listButtons" :key="listButton.key">
      <Button
        size="icon"
        :variant="listButton.variant"
        @click="listButton.onClick"
      >
        <component :is="listButton.icon" />
      </Button>
      <Separator
        v-if="index !== listButtons.length - 1"
        orientation="vertical"
      />
    </template>
  </div>
</template>
