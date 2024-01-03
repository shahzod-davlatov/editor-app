<script setup lang="ts">
import FontFamilyCommand from './FontFamilyCommand.vue'
import LinkCommand from './LinkCommand.vue'
import ListCommand from './ListCommand.vue'
import OtherCommand from './OtherCommand.vue'
import TextAlignCommand from './TextAlignCommand.vue'
import TextColorCommand from './TextColorCommand.vue'
import TextHighlight from './TextHighlight.vue'
import TextSizeCommand from './TextSizeCommand.vue'
import TextStyleCommand from './TextStyleCommand.vue'
import UserCommand from './UserCommand.vue'

import type { Editor } from '@tiptap/vue-3'

const { editor } = defineProps<{ editor: Editor }>()
</script>

<template>
  <div class="absolute inset-x-0 top-0 flex items-center gap-5 p-5">
    <TextStyleCommand :editor="editor" />
    <TextSizeCommand :editor="editor" />
    <FontFamilyCommand :editor="editor" />
    <TextColorCommand :editor="editor" />
    <TextHighlight :editor="editor" />
    <LinkCommand :editor="editor" />
    <TextAlignCommand :editor="editor" />
    <ListCommand :editor="editor" />
    <OtherCommand :editor="editor" />
    <UserCommand :editor="editor" />
  </div>
</template>
