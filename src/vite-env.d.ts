/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LIVEBLOCKS_API_KEY: string
  readonly VITE_WEBSOCKET_API_KEY: string
  readonly VITE_POSTS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
