import { customRef } from 'vue'

import { DOCUMENT_PREFIX } from '@constants/storage'

import type { DocumentCardProps } from '@typings/document'
import type { Ref } from 'vue'

export const useDocumentStorage = (): Ref<DocumentCardProps[]> => {
  let documents: DocumentCardProps[]

  return customRef((track, trigger) => ({
    get(): DocumentCardProps[] {
      track()

      documents = Object.keys(localStorage).reduce<DocumentCardProps[]>(
        (acc, key) => {
          const document = localStorage.getItem(key)

          if (!key.startsWith(DOCUMENT_PREFIX) || !document) {
            return acc
          }

          acc.push(JSON.parse(document))

          return acc
        },
        []
      )

      return documents
    },
    set(newDocuments): void {
      Object.keys(localStorage).forEach((key) => {
        if (!key.startsWith(DOCUMENT_PREFIX)) {
          return
        }

        localStorage.removeItem(key)
      })

      newDocuments.forEach((document) => {
        localStorage.setItem(
          `${DOCUMENT_PREFIX}${document.id}`,
          JSON.stringify(document)
        )
      })

      documents = newDocuments
      trigger()
    },
  }))
}
