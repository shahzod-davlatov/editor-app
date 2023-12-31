<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { Button } from '@shadcn/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@shadcn/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from '@shadcn/ui/dialog'

import dayjs from 'dayjs'

import { DATE_FORMAT } from '@constants/locale'

import type { DocumentCardData } from '@typings/document'
import type { MessageSchema } from '@typings/locale'

type Emits = {
  edit: [id: string]
  remove: [id: string]
}

const { id, title, description, date } = defineProps<DocumentCardData>()

const emit = defineEmits<Emits>()

const { t, locale } = useI18n<{ message: MessageSchema }>()
</script>

<template>
  <Card class="max-h-56 w-full md:w-1/4">
    <CardHeader>
      <CardTitle class="truncate">{{ title }}</CardTitle>
      <CardDescription>
        {{ dayjs(date).locale(locale).format(DATE_FORMAT) }}
      </CardDescription>
    </CardHeader>
    <CardContent class="truncate">
      {{ description }}
    </CardContent>
    <CardFooter class="flex justify-end">
      <Dialog>
        <DialogTrigger as-child>
          <Button>{{ t('button.open') }}</Button>
        </DialogTrigger>
        <DialogContent class="w-11/12 md:w-max">
          <DialogHeader>
            <DialogTitle>{{ title }}</DialogTitle>
            <DialogDescription>
              {{ dayjs(date).locale(locale).format(DATE_FORMAT) }}
            </DialogDescription>
          </DialogHeader>

          {{ description }}

          <DialogFooter>
            <DialogClose as-child>
              <Button @click="emit('edit', id)">{{ t('button.edit') }}</Button>
            </DialogClose>
            <DialogClose as-child>
              <Button @click="emit('remove', id)" variant="destructive">{{
                t('button.remove')
              }}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </CardFooter>
  </Card>
</template>
