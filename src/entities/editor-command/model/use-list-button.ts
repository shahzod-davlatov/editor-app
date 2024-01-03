import { computed } from 'vue'

import { List, ListOrdered } from 'lucide-vue-next'

import type { Button } from '@shadcn/ui/button'
import type { Editor } from '@tiptap/vue-3'
import type { Icon } from 'lucide-vue-next'
import type { ComputedRef } from 'vue'

type ListButton = {
  key: string
  variant: InstanceType<typeof Button>['$props']['variant']
  onClick: () => boolean
  icon: Icon
}

export const useListButton = (editor: Editor): ComputedRef<ListButton[]> =>
  computed(() => [
    {
      key: 'bulletList',
      variant: editor.isActive('bulletList') ? 'default' : 'secondary',
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      icon: List,
    },
    {
      key: 'orderedList',
      variant: editor.isActive('orderedList') ? 'default' : 'secondary',
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      icon: ListOrdered,
    },
  ])
