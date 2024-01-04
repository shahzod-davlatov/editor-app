<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { Menu } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@shadcn/ui/dropdown-menu'

import { useFontFamily } from '../model/use-font-family'
import { useListButton } from '../model/use-list-button'
import { useOtherButton } from '../model/use-other-button'
import { useTextAlign } from '../model/use-text-align'
import { useTextSize } from '../model/use-text-size'
import { useTextStyle } from '../model/use-text-style'

import type { Editor } from '@tiptap/vue-3'
import type { MessageSchema } from '@typings/locale'

const { editor } = defineProps<{ editor: Editor }>()

const fontFamilies = useFontFamily(editor)
const listButtons = useListButton(editor)
const otherButtons = useOtherButton(editor)
const textAligns = useTextAlign(editor)
const textSizes = useTextSize(editor)
const textStyles = useTextStyle(editor)

const { t } = useI18n<{ message: MessageSchema }>()

const menuItems = computed(() => [
  {
    key: 'text-styles',
    trigger: t('editor.menu.lettering'),
    items: textStyles,
  },
  {
    key: 'text-sizes',
    trigger: t('editor.menu.heading'),
    items: textSizes,
  },
  {
    key: 'font-families',
    trigger: t('editor.menu.families'),
    items: fontFamilies,
  },
  {
    key: 'text-aligns',
    trigger: t('editor.menu.aligns'),
    items: textAligns,
  },
  {
    key: 'list-buttons',
    trigger: t('editor.menu.list'),
    items: listButtons,
  },
  {
    key: 'other-buttons',
    trigger: t('editor.menu.other'),
    items: otherButtons,
  },
])
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child class="2xl:hidden">
      <Button size="icon" variant="secondary">
        <Menu />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <template v-for="(menuItem, index) in menuItems" :key="menuItem.key">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>{{ menuItem.trigger }}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <template
                v-for="(command, index) in menuItem.items.value"
                :key="command.key"
              >
                <DropdownMenuItem
                  @click="command.onClick"
                  :class="command.class"
                >
                  <component :is="command.icon" class="mr-2 h-4 w-4" />
                  <span>{{ command.text }}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator
                  v-if="index !== menuItem.items.value.length - 1"
                />
              </template>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator v-if="index !== menuItems.length - 1" />
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
