import { computed } from 'vue'

import { TextQuote, WrapText } from 'lucide-vue-next'

import type { Button } from '@shadcn/ui/button'
import type { Editor } from '@tiptap/vue-3'
import type { Icon } from 'lucide-vue-next'
import type { ComputedRef } from 'vue'

type OtherButton = {
  key: string
  variant: InstanceType<typeof Button>['$props']['variant']
  onClick: () => boolean
  icon: Icon
}

export const useOtherButton = (editor: Editor): ComputedRef<OtherButton[]> =>
  computed(() => [
    {
      key: 'blockquote',
      variant: editor.isActive('blockquote') ? 'default' : 'secondary',
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      icon: TextQuote,
    },
    {
      key: 'wrap',
      variant: 'secondary',
      onClick: () => editor.chain().focus().setHardBreak().run(),
      icon: WrapText,
    },
  ])
