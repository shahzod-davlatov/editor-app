import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

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
import type { CommandItem } from '@typings/editor'
import type { MessageSchema } from '@typings/locale'
import type { ComputedRef } from 'vue'

export const useTextSize = (editor: Editor): ComputedRef<CommandItem[]> => {
  const { t } = useI18n<{ message: MessageSchema }>()

  return computed(() => [
    {
      key: 'paragraph',
      class: editor.isActive('paragraph') ? 'text-primary' : undefined,
      text: t('editor.command.paragraph'),
      variant: editor.isActive('paragraph') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().setParagraph().run(),
      icon: Pilcrow,
      onClick: () => editor.chain().focus().setParagraph().run(),
    },
    {
      key: 'heading1',
      class: editor.isActive('heading', { level: 1 })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.heading1'),
      variant: editor.isActive('heading', { level: 1 })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().toggleHeading({ level: 1 }).run(),
      icon: Heading1,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      key: 'heading2',
      class: editor.isActive('heading', { level: 2 })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.heading2'),
      variant: editor.isActive('heading', { level: 2 })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().toggleHeading({ level: 2 }).run(),
      icon: Heading2,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      key: 'heading3',
      class: editor.isActive('heading', { level: 3 })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.heading3'),
      variant: editor.isActive('heading', { level: 3 })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().toggleHeading({ level: 3 }).run(),
      icon: Heading3,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      key: 'heading4',
      class: editor.isActive('heading', { level: 4 })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.heading4'),
      variant: editor.isActive('heading', { level: 4 })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().toggleHeading({ level: 4 }).run(),
      icon: Heading4,
      onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
    },
    {
      key: 'heading5',
      class: editor.isActive('heading', { level: 5 })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.heading5'),
      variant: editor.isActive('heading', { level: 5 })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().toggleHeading({ level: 5 }).run(),
      icon: Heading5,
      onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
    },
    {
      key: 'heading6',
      class: editor.isActive('heading', { level: 6 })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.heading6'),
      variant: editor.isActive('heading', { level: 5 })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().toggleHeading({ level: 6 }).run(),
      icon: Heading6,
      onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
    },
  ])
}
