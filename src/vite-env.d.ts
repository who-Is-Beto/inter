/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BaseURL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
