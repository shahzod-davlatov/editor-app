import { computed } from 'vue'

import {
  Pilcrow,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from 'lucide-vue-next'

import type { Editor } from '@tiptap/vue-3'
import type { Icon } from 'lucide-vue-next'
import type { ComputedRef } from 'vue'

type TextSize = {
  key: string
  class: string | undefined
  onClick: () => boolean
  icon: Icon
  text: string
}

export const useTextSize = (editor: Editor): ComputedRef<TextSize[]> =>
  computed(() => [
    {
      key: 'paragraph',
      class: editor.isActive('paragraph') ? 'text-primary' : undefined,
      onClick: () => editor.chain().focus().setParagraph().run(),
      icon: Pilcrow,
      text: 'Paragraph',
    },
    {
      key: 'heading1',
      class: editor.isActive('heading', { level: 1 })
        ? 'text-primary'
        : undefined,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      icon: Heading1,
      text: 'Heading 1',
    },
    {
      key: 'heading2',
      class: editor.isActive('heading', { level: 2 })
        ? 'text-primary'
        : undefined,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      icon: Heading2,
      text: 'Heading 2',
    },
    {
      key: 'heading3',
      class: editor.isActive('heading', { level: 3 })
        ? 'text-primary'
        : undefined,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      icon: Heading3,
      text: 'Heading 3',
    },
    {
      key: 'heading4',
      class: editor.isActive('heading', { level: 4 })
        ? 'text-primary'
        : undefined,
      onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      icon: Heading4,
      text: 'Heading 4',
    },
    {
      key: 'heading5',
      class: editor.isActive('heading', { level: 5 })
        ? 'text-primary'
        : undefined,
      onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
      icon: Heading5,
      text: 'Heading 5',
    },
    {
      key: 'heading6',
      class: editor.isActive('heading', { level: 6 })
        ? 'text-primary'
        : undefined,
      onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
      icon: Heading6,
      text: 'Heading 6',
    },
  ])
