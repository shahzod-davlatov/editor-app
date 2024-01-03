import { computed } from 'vue'

import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from 'lucide-vue-next'

import type { Button } from '@shadcn/ui/button'
import type { Editor } from '@tiptap/vue-3'
import type { Icon } from 'lucide-vue-next'
import type { ComputedRef } from 'vue'

type TextAlign = {
  key: string
  variant: InstanceType<typeof Button>['$props']['variant']
  onClick: () => boolean
  icon: Icon
}

export const useTextAlign = (editor: Editor): ComputedRef<TextAlign[]> =>
  computed(() => [
    {
      key: 'left',
      variant: editor.isActive({ textAlign: 'left' }) ? 'default' : 'secondary',
      onClick: (): boolean => {
        if (editor.isActive({ textAlign: 'left' })) {
          return editor.chain().focus().unsetTextAlign().run()
        }

        return editor.chain().focus().setTextAlign('left').run()
      },
      icon: AlignLeft,
    },
    {
      key: 'center',
      variant: editor.isActive({ textAlign: 'center' })
        ? 'default'
        : 'secondary',
      onClick: (): boolean => {
        if (editor.isActive({ textAlign: 'center' })) {
          return editor.chain().focus().unsetTextAlign().run()
        }

        return editor.chain().focus().setTextAlign('center').run()
      },
      icon: AlignCenter,
    },
    {
      key: 'right',
      variant: editor.isActive({ textAlign: 'right' })
        ? 'default'
        : 'secondary',
      onClick: (): boolean => {
        if (editor.isActive({ textAlign: 'right' })) {
          return editor.chain().focus().unsetTextAlign().run()
        }

        return editor.chain().focus().setTextAlign('right').run()
      },
      icon: AlignRight,
    },
    {
      key: 'justify',
      variant: editor.isActive({ textAlign: 'justify' })
        ? 'default'
        : 'secondary',
      onClick: (): boolean => {
        if (editor.isActive({ textAlign: 'justify' })) {
          return editor.chain().focus().unsetTextAlign().run()
        }

        return editor.chain().focus().setTextAlign('justify').run()
      },
      icon: AlignJustify,
    },
  ])
