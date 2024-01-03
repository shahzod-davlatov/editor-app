import { computed } from 'vue'

import { Bold, Italic, Strikethrough, Underline } from 'lucide-vue-next'

import type { Button } from '@shadcn/ui/button'
import type { Editor } from '@tiptap/vue-3'
import type { Icon } from 'lucide-vue-next'
import type { ComputedRef } from 'vue'

type TextStyle = {
  key: string
  variant: InstanceType<typeof Button>['$props']['variant']
  disabled: boolean
  onClick: () => boolean
  icon: Icon
}

export const useTextStyle = (editor: Editor): ComputedRef<TextStyle[]> =>
  computed(() => [
    {
      key: 'bold',
      variant: editor.isActive('bold') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().toggleBold().run(),
      onClick: () => editor.chain().focus().toggleBold().run(),
      icon: Bold,
    },
    {
      key: 'italic',
      variant: editor.isActive('italic') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().toggleItalic().run(),
      onClick: () => editor.chain().focus().toggleItalic().run(),
      icon: Italic,
    },
    {
      key: 'underline',
      variant: editor.isActive('underline') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().toggleUnderline().run(),
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      icon: Underline,
    },
    {
      key: 'strike',
      variant: editor.isActive('strike') ? 'default' : 'secondary',
      disabled: !editor.can().chain().focus().toggleStrike().run(),
      onClick: () => editor.chain().focus().toggleStrike().run(),
      icon: Strikethrough,
    },
  ])
