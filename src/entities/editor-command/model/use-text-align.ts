import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from 'lucide-vue-next'

import type { Editor } from '@tiptap/vue-3'
import type { CommandItem } from '@typings/editor'
import type { MessageSchema } from '@typings/locale'
import type { ComputedRef } from 'vue'

export const useTextAlign = (editor: Editor): ComputedRef<CommandItem[]> => {
  const { t } = useI18n<{ message: MessageSchema }>()

  return computed(() => [
    {
      key: 'left',
      class: editor.isActive({ textAlign: 'left' })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.align-left'),
      variant: editor.isActive({ textAlign: 'left' }) ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().setTextAlign('left').run(),
      icon: AlignLeft,
      onClick: (): boolean => {
        if (editor.isActive({ textAlign: 'left' })) {
          return editor.chain().focus().unsetTextAlign().run()
        }

        return editor.chain().focus().setTextAlign('left').run()
      },
    },
    {
      key: 'center',
      class: editor.isActive({ textAlign: 'center' })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.align-center'),
      variant: editor.isActive({ textAlign: 'center' })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().setTextAlign('center').run(),
      icon: AlignCenter,
      onClick: (): boolean => {
        if (editor.isActive({ textAlign: 'center' })) {
          return editor.chain().focus().unsetTextAlign().run()
        }

        return editor.chain().focus().setTextAlign('center').run()
      },
    },
    {
      key: 'right',
      class: editor.isActive({ textAlign: 'right' })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.align-right'),
      variant: editor.isActive({ textAlign: 'right' })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().setTextAlign('right').run(),
      icon: AlignRight,
      onClick: (): boolean => {
        if (editor.isActive({ textAlign: 'right' })) {
          return editor.chain().focus().unsetTextAlign().run()
        }

        return editor.chain().focus().setTextAlign('right').run()
      },
    },
    {
      key: 'justify',
      class: editor.isActive({ textAlign: 'justify' })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.align-justify'),
      variant: editor.isActive({ textAlign: 'justify' })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().setTextAlign('justify').run(),
      icon: AlignJustify,
      onClick: (): boolean => {
        if (editor.isActive({ textAlign: 'justify' })) {
          return editor.chain().focus().unsetTextAlign().run()
        }

        return editor.chain().focus().setTextAlign('justify').run()
      },
    },
  ])
}
