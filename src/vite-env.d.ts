/// <reference types="vite/client" />
/// <reference types="@welldone-software/why-did-you-render" />

interface ImportMetaEnv {
  VITE_APP_NAME: string;
  VITE_SUPABASE_ANON_KEY: string;
  VITE_SUPABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
