import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { CaseSensitive } from 'lucide-vue-next'

import type { Editor } from '@tiptap/vue-3'
import type { CommandItem } from '@typings/editor'
import type { MessageSchema } from '@typings/locale'
import type { ComputedRef } from 'vue'

export const useFontFamily = (editor: Editor): ComputedRef<CommandItem[]> => {
  const { t } = useI18n<{ message: MessageSchema }>()

  return computed(() => [
    {
      key: 'inter',
      class: editor.isActive('textStyle', { fontFamily: 'Inter' })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.inter'),
      variant: editor.isActive('textStyle', { fontFamily: 'Inter' })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().setFontFamily('Inter').run(),
      icon: CaseSensitive,
      onClick: () => editor.chain().focus().setFontFamily('Inter').run(),
    },
    {
      key: 'comic-sans',
      class: editor.isActive('textStyle', {
        fontFamily: 'Comic Sans MS, Comic Sans',
      })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.comic-sans'),
      variant: editor.isActive('textStyle', {
        fontFamily: 'Comic Sans MS, Comic Sans',
      })
        ? 'default'
        : 'secondary',
      disabled: !editor
        .can()
        .chain()
        .focus()
        .setFontFamily('Comic Sans MS, Comic Sans')
        .run(),
      icon: CaseSensitive,
      onClick: () =>
        editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run(),
    },
    {
      key: 'serif',
      class: editor.isActive('textStyle', { fontFamily: 'serif' })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.serif'),
      variant: editor.isActive('textStyle', { fontFamily: 'serif' })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().setFontFamily('serif').run(),
      icon: CaseSensitive,
      onClick: () => editor.chain().focus().setFontFamily('serif').run(),
    },
    {
      key: 'monospace',
      class: editor.isActive('textStyle', { fontFamily: 'monospace' })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.monospace'),
      variant: editor.isActive('textStyle', { fontFamily: 'monospace' })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().setFontFamily('monospace').run(),
      icon: CaseSensitive,
      onClick: () => editor.chain().focus().setFontFamily('monospace').run(),
    },
    {
      key: 'cursive',
      class: editor.isActive('textStyle', { fontFamily: 'cursive' })
        ? 'text-primary'
        : undefined,
      text: t('editor.command.cursive'),
      variant: editor.isActive('textStyle', { fontFamily: 'cursive' })
        ? 'default'
        : 'secondary',
      disabled: !editor.can().chain().focus().setFontFamily('cursive').run(),
      icon: CaseSensitive,
      onClick: () => editor.chain().focus().setFontFamily('cursive').run(),
    },
    {
      key: 'default',
      class: 'text-destructive',
      text: t('editor.command.default'),
      variant: 'secondary',
      disabled: !editor.can().chain().focus().unsetFontFamily().run(),
      icon: CaseSensitive,
      onClick: () => editor.chain().focus().unsetFontFamily().run(),
    },
  ])
}
