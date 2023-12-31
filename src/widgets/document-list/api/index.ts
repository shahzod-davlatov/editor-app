import { useFetch } from '@vueuse/core'

import dayjs from 'dayjs'
import { nanoid } from 'nanoid'

import { POSTS_URL } from '@constants/api'

import type { DocumentCardData } from '@typings/document'
import type { AfterFetchContext } from '@vueuse/core'
import type { Ref } from 'vue'

type Post = {
  title: string
  body: string
  description: string
  id: string
}

export const useFetchPosts = (
  loaded: Ref<boolean>
): { data: Ref<DocumentCardData[] | null>; isFetching: Ref<boolean> } => {
  const { data, isFetching } = useFetch(POSTS_URL, {
    immediate: !loaded.value,
    afterFetch(ctx: AfterFetchContext<Partial<Post>[]>) {
      if (!ctx.data) {
        return ctx
      }

      ctx.data = ctx.data.map(({ title, body }) => ({
        id: nanoid(),
        date: dayjs(),
        description: body,
        title,
      }))

      return ctx
    },
  }).json<DocumentCardData[]>()

  return { data, isFetching }
}
