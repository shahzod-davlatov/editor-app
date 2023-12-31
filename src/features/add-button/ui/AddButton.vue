<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { FilePlus, Save } from 'lucide-vue-next'

import { Button } from '@shadcn/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from '@shadcn/ui/dialog'
import { FormField, FormItem, FormLabel, FormControl } from '@shadcn/ui/form'
import { Input } from '@shadcn/ui/input'
import { Textarea } from '@shadcn/ui/textarea'

import { toTypedSchema } from '@vee-validate/zod'
import dayjs from 'dayjs'
import { nanoid } from 'nanoid'
import { useForm } from 'vee-validate'
import * as z from 'zod'

import type { DocumentCardData } from '@typings/document'
import type { MessageSchema } from '@typings/locale'

const emit = defineEmits<{ save: [data: DocumentCardData] }>()

const { t } = useI18n<{ message: MessageSchema }>()

const formSchema = toTypedSchema(
  z.object({
    title: z.string().min(3).max(50),
    description: z.string().min(3),
  })
)

const form = useForm({ validationSchema: formSchema })

const isFormValid = computed(() => {
  const keys: ('title' | 'description')[] = ['title', 'description']

  return keys.every((key) => form.isFieldValid(key) && form.isFieldTouched(key))
})

const handleSubmit = form.handleSubmit(({ title, description }) => {
  emit('save', {
    id: nanoid(),
    date: dayjs(),
    title,
    description,
  })
})
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="secondary">
        <FilePlus class="mr-2 h-4 w-4" /> {{ t('button.add') }}
      </Button>
    </DialogTrigger>
    <DialogContent class="min-h-[500px] w-11/12">
      <form @submit="handleSubmit" class="flex flex-col">
        <DialogHeader>
          <DialogTitle>{{ t('add-dialog.header') }}</DialogTitle>
        </DialogHeader>

        <FormField v-slot="{ componentField }" name="title">
          <FormItem class="mt-5">
            <FormLabel>{{ t('add-dialog.title.label') }}</FormLabel>
            <FormControl>
              <Input
                type="text"
                :placeholder="t('add-dialog.title.placeholder')"
                v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="description">
          <FormItem class="mt-5">
            <FormLabel>{{ t('add-dialog.description.label') }}</FormLabel>
            <FormControl>
              <Textarea
                :placeholder="t('add-dialog.description.placeholder')"
                v-bind="componentField"
              />
            </FormControl>
          </FormItem>
        </FormField>

        <DialogFooter class="mt-auto">
          <DialogClose as-child>
            <Button type="submit" :disabled="!isFormValid">
              <Save class="mr-2 h-4 w-4" /> {{ t('button.save') }}
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
