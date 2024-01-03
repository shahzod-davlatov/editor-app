import { Collaboration } from '@tiptap/extension-collaboration'
import { CollaborationCursor } from '@tiptap/extension-collaboration-cursor'
import { Color } from '@tiptap/extension-color'
import { FontFamily } from '@tiptap/extension-font-family'
import { Highlight } from '@tiptap/extension-highlight'
import { Link } from '@tiptap/extension-link'
import { TextAlign } from '@tiptap/extension-text-align'
import { TextStyle } from '@tiptap/extension-text-style'
import { Typography } from '@tiptap/extension-typography'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'

import type { BaseUserMeta, JsonObject, LsonObject } from '@liveblocks/client'
import type LiveblocksProvider from '@liveblocks/yjs'
import type { Doc } from 'yjs'

export const getEditorExtensions = (
  yDoc: Doc,
  yProvider: LiveblocksProvider<JsonObject, LsonObject, BaseUserMeta, never>
): Array<
  | typeof Link
  | typeof Color
  | typeof Highlight
  | typeof Underline
  | typeof Typography
  | typeof FontFamily
  | typeof TextStyle
  | typeof TextAlign
  | typeof StarterKit
  | typeof Collaboration
  | typeof CollaborationCursor
> => [
  Link,
  Color,
  Underline,
  Typography,
  FontFamily,
  TextStyle,
  Highlight.configure({
    multicolor: true,
  }),
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  StarterKit.configure({
    history: false,
    code: false,
    codeBlock: false,
    heading: {
      HTMLAttributes: {
        class: 'font-semibold',
      },
    },
    bulletList: {
      HTMLAttributes: {
        class: 'list-disc pl-5',
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: 'list-decimal pl-5',
      },
    },
    blockquote: {
      HTMLAttributes: {
        class: 'pl-5 border-l-2',
      },
    },
  }),
  Collaboration.configure({
    document: yDoc,
  }),
  CollaborationCursor.configure({ provider: yProvider }),
]
