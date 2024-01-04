import { onMounted, ref, watch } from 'vue'

import { useWebSocket } from '@vueuse/core'

import { WEBSOCKET_API_KEY } from '@constants/api'

import type { Ref } from 'vue'

type Info = {
  title?: string | number
  description?: string | number
}

type Status = { status: 'join' }

type Message = Status | Info

export const useLiveInfo = (args: {
  documentId: string
  title: string | number
  description: string | number
}): {
  liveTitle: Ref<string | number>
  liveDescription: Ref<string | number>
  handleLiveTitleInput: (payload: string | number) => void
  handleLiveDescriptionInput: (payload: string | number) => void
} => {
  const { data, send } = useWebSocket<string>(
    `wss://free.blr2.piesocket.com/v3/${args.documentId}?api_key=${WEBSOCKET_API_KEY}`,
    { autoReconnect: true }
  )

  const liveTitle = ref(args.title)
  const liveDescription = ref(args.description)

  const isStatusMessage = (message: Message): message is Status => {
    return 'status' in message
  }

  const handleLiveTitleInput = (payload: string | number): void => {
    liveTitle.value = payload
    send(JSON.stringify({ title: liveTitle.value }))
  }
  const handleLiveDescriptionInput = (payload: string | number): void => {
    liveDescription.value = payload
    send(JSON.stringify({ description: liveDescription.value }))
  }

  watch(data, () => {
    if (!data.value) {
      return
    }

    const message: Message = JSON.parse(data.value)

    if (isStatusMessage(message)) {
      send(
        JSON.stringify({
          title: liveTitle.value,
          description: liveDescription.value,
        })
      )

      return
    }

    if (message.title) {
      liveTitle.value = message.title
    }

    if (message.description) {
      liveDescription.value = message.description
    }
  })

  onMounted(() => {
    send(JSON.stringify({ status: 'join' }))
  })

  return {
    liveTitle,
    liveDescription,
    handleLiveTitleInput,
    handleLiveDescriptionInput,
  }
}
