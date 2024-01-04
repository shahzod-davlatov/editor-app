import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { List, ListOrdered } from 'lucide-vue-next'

import type { Editor } from '@tiptap/vue-3'
import type { CommandItem } from '@typings/editor'
import type { MessageSchema } from '@typings/locale'
import type { ComputedRef } from 'vue'

export const useListButton = (editor: Editor): ComputedRef<CommandItem[]> => {
  const { t } = useI18n<{ message: MessageSchema }>()

  return computed(() => [
    {
      key: 'bulletList',
      class: editor.isActive('bulletList') ? 'text-primary' : undefined,
      text: t('editor.command.bulletList'),
      variant: editor.isActive('bulletList') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().toggleBulletList().run(),
      icon: List,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      key: 'orderedList',
      class: editor.isActive('orderedList') ? 'text-primary' : undefined,
      text: t('editor.command.orderedList'),
      variant: editor.isActive('orderedList') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().toggleOrderedList().run(),
      icon: ListOrdered,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
    },
  ])
}
