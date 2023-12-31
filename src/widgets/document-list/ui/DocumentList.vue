<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { Skeleton } from '@shadcn/ui/skeleton'

import { AddButton } from '@features/add-button'
import { ClearButton } from '@features/clear-button'
import { DocumentCard } from '@features/document-card'
import { SearchInput } from '@features/search-input'

import { useDocumentList } from '../model'

const search = ref('')

const router = useRouter()

const {
  documents,
  isFetching,
  handleAddDocument,
  handleRemoveDocument,
  handleClear,
} = useDocumentList(search)
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-5">
    <SearchInput v-model="search" />
    <ClearButton class="md:ml-auto" @click="handleClear" />
    <AddButton @save="handleAddDocument" />
  </div>
  <div v-if="isFetching" class="mt-5 flex flex-wrap justify-center gap-5">
    <Skeleton v-for="number in 10" :key="number" class="h-56 w-full md:w-1/4" />
  </div>
  <div v-else class="mt-5 flex flex-wrap justify-center gap-5">
    <DocumentCard
      v-for="{ id, title, description, date } in documents"
      :key="id"
      :id="id"
      :title="title"
      :description="description"
      :date="date"
      @edit="router.push($event)"
      @remove="handleRemoveDocument"
    />
  </div>
</template>
