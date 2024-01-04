import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { Bold, Italic, Strikethrough, Underline } from 'lucide-vue-next'

import type { Editor } from '@tiptap/vue-3'
import type { CommandItem } from '@typings/editor'
import type { MessageSchema } from '@typings/locale'
import type { ComputedRef } from 'vue'

export const useTextStyle = (editor: Editor): ComputedRef<CommandItem[]> => {
  const { t } = useI18n<{ message: MessageSchema }>()

  return computed(() => [
    {
      key: 'bold',
      class: editor.isActive('bold') ? 'text-primary' : undefined,
      text: t('editor.command.bold'),
      variant: editor.isActive('bold') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().toggleBold().run(),
      icon: Bold,
      onClick: () => editor.chain().focus().toggleBold().run(),
    },
    {
      key: 'italic',
      class: editor.isActive('italic') ? 'text-primary' : undefined,
      text: t('editor.command.italic'),
      variant: editor.isActive('italic') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().toggleItalic().run(),
      icon: Italic,
      onClick: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      key: 'underline',
      class: editor.isActive('underline') ? 'text-primary' : undefined,
      text: t('editor.command.underline'),
      variant: editor.isActive('underline') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().toggleUnderline().run(),
      icon: Underline,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
    },
    {
      key: 'strike',
      class: editor.isActive('strike') ? 'text-primary' : undefined,
      text: t('editor.command.strike'),
      variant: editor.isActive('strike') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().toggleStrike().run(),
      icon: Strikethrough,
      onClick: () => editor.chain().focus().toggleStrike().run(),
    },
  ])
}
