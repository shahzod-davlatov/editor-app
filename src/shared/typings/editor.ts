import type { Button } from '@shadcn/ui/button'
import type { Icon } from 'lucide-vue-next'

export type CommandItem = {
  key: string
  class: string | undefined
  text: string
  variant: InstanceType<typeof Button>['$props']['variant']
  disabled: boolean
  icon: Icon
  onClick: () => boolean
}
