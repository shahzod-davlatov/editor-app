<script setup lang="ts">
import { watch } from 'vue'

import { EditorContent } from '@tiptap/vue-3'

import { EditorCommand } from '@entities/editor-command'
import { useTiptapEditor } from '@entities/use-tiptap-editor'

import type { Editor } from '@tiptap/vue-3'

const { documentId } = defineProps<{ documentId: string }>()

const emit = defineEmits<{ getEditorInstance: [editor: Editor] }>()

const { editor } = useTiptapEditor(documentId)

watch(editor, () => {
  if (editor.value) {
    emit('getEditorInstance', editor.value)
  }
})
</script>

<template>
  <div
    v-if="editor"
    class="relative w-full grow rounded-lg border bg-card p-5 pt-20 text-card-foreground shadow-sm md:w-9/12 md:grow-0"
  >
    <EditorCommand :editor="editor" />
    <EditorContent :editor="editor" />
  </div>
</template>

<style>
.tiptap {
  height: 65dvh;

  overflow-y: scroll;

  outline: none;
}
</style>
