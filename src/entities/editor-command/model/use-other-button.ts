import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { TextQuote, WrapText } from 'lucide-vue-next'

import type { Editor } from '@tiptap/vue-3'
import type { CommandItem } from '@typings/editor'
import type { MessageSchema } from '@typings/locale'
import type { ComputedRef } from 'vue'

export const useOtherButton = (editor: Editor): ComputedRef<CommandItem[]> => {
  const { t } = useI18n<{ message: MessageSchema }>()

  return computed(() => [
    {
      key: 'blockquote',
      class: editor.isActive('blockquote') ? 'text-primary' : undefined,
      text: t('editor.command.blockquote'),
      variant: editor.isActive('blockquote') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().toggleBlockquote().run(),
      icon: TextQuote,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
    },
    {
      key: 'wrap',
      class: undefined,
      text: t('editor.command.wrap-text'),
      variant: 'secondary',
      disabled: !editor.can().chain().focus().setHardBreak().run(),
      icon: WrapText,
      onClick: () => editor.chain().focus().setHardBreak().run(),
    },
  ])
}
