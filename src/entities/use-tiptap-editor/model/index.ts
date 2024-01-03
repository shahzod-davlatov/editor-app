import { onUnmounted } from 'vue'

import { createClient } from '@liveblocks/client'
import LiveblocksProvider from '@liveblocks/yjs'

import { useEditor } from '@tiptap/vue-3'

import { IndexeddbPersistence } from 'y-indexeddb'
import { Doc } from 'yjs'

import { LIVEBLOCKS_API_KEY } from '@constants/api'

import { getEditorExtensions } from '../lib'

import type { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export const useTiptapEditor = (
  documentId: string
): {
  editor: ShallowRef<Editor | undefined>
} => {
  const client = createClient({
    publicApiKey: LIVEBLOCKS_API_KEY,
  })

  const info = client.enterRoom(documentId, { initialPresence: {} })

  const yDoc = new Doc()
  new IndexeddbPersistence(documentId, yDoc)

  const yProvider = new LiveblocksProvider(info.room, yDoc)

  const editor = useEditor({
    extensions: getEditorExtensions(yDoc, yProvider),
  })

  onUnmounted(() => {
    info?.leave()
  })

  return { editor }
}
