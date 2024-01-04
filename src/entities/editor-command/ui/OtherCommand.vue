<script setup lang="ts">
import { Button } from '@shadcn/ui/button'

import { useOtherButton } from '../model/use-other-button'

import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{ editor: Editor }>()

const otherButtons = useOtherButton(editor)
</script>

<template>
  <template v-for="otherButton in otherButtons" :key="otherButton.key">
    <Button
      size="icon"
      class="hidden md:flex"
      :variant="otherButton.variant"
      @click="otherButton.onClick"
    >
      <component :is="otherButton.icon" />
    </Button>
  </template>
</template>
