import { createClient } from 'contentful'

export const client = createClient({
  space: 'qz00uzgg3leh',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_CONTENTFUL_KEY,
})
