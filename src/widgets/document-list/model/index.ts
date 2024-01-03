import { computed, watch } from 'vue'

import { useLocalStorage } from '@vueuse/core'

import { POSTS_LOADED_KEY } from '@constants/storage'

import { useFetchPosts } from '../api'
import { useDocumentStorage } from '../lib'

import type { DocumentData } from '@typings/document'
import type { Ref } from 'vue'

export const useDocumentList = (
  filter: Ref<string>
): {
  documents: Ref<DocumentData[]>
  isFetching: Ref<boolean>
  handleAddDocument: (document: DocumentData) => void
  handleRemoveDocument: (id: string) => void
  handleClear: () => void
} => {
  const postsLoaded = useLocalStorage(POSTS_LOADED_KEY, false)

  const { data, isFetching } = useFetchPosts(postsLoaded)

  const documents = useDocumentStorage()

  const handleAddDocument = (document: DocumentData): void => {
    documents.value = [...documents.value, document]
  }

  const handleRemoveDocument = (id: string): void => {
    documents.value = documents.value.filter((document) => document.id !== id)
  }

  const handleClear = (): void => {
    documents.value = []
  }

  const documentsWithFilter = computed(() =>
    documents.value.filter((document) =>
      document.title.toLowerCase().includes(filter.value.toLowerCase())
    )
  )

  watch(data, () => {
    if (!data.value) {
      return
    }

    if (!postsLoaded.value) {
      documents.value = data.value

      postsLoaded.value = true
    }
  })

  return {
    documents: documentsWithFilter,
    isFetching,
    handleAddDocument,
    handleRemoveDocument,
    handleClear,
  }
}
