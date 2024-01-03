import { computed } from 'vue'

import type { Editor } from '@tiptap/vue-3'
import type { ComputedRef } from 'vue'

type FontFamily = {
  key: string
  class: string | undefined
  onClick: () => boolean
  text: string
}

export const useFontFamily = (editor: Editor): ComputedRef<FontFamily[]> =>
  computed(() => [
    {
      key: 'inter',
      class: editor.isActive('textStyle', { fontFamily: 'Inter' })
        ? 'text-primary'
        : undefined,
      onClick: () => editor.chain().focus().setFontFamily('Inter').run(),
      text: 'Inter',
    },
    {
      key: 'comic-sans',
      class: editor.isActive('textStyle', {
        fontFamily: 'Comic Sans MS, Comic Sans',
      })
        ? 'text-primary'
        : undefined,
      onClick: () =>
        editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run(),
      text: 'Comic Sans',
    },
    {
      key: 'serif',
      class: editor.isActive('textStyle', { fontFamily: 'serif' })
        ? 'text-primary'
        : undefined,
      onClick: () => editor.chain().focus().setFontFamily('serif').run(),
      text: 'Serif',
    },
    {
      key: 'monospace',
      class: editor.isActive('textStyle', { fontFamily: 'monospace' })
        ? 'text-primary'
        : undefined,
      onClick: () => editor.chain().focus().setFontFamily('monospace').run(),
      text: 'Monospace',
    },
    {
      key: 'cursive',
      class: editor.isActive('textStyle', { fontFamily: 'cursive' })
        ? 'text-primary'
        : undefined,
      onClick: () => editor.chain().focus().setFontFamily('cursive').run(),
      text: 'Cursive',
    },
    {
      key: 'default',
      class: 'text-destructive',
      onClick: () => editor.chain().focus().unsetFontFamily().run(),
      text: 'Default',
    },
  ])
