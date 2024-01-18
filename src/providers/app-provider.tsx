import { StrictMode } from 'react'

import { AppPage } from '@/pages/app-page'

import '@/styles/index.scss'

export function AppProvider() {
  return (
    <StrictMode>
      <AppPage />
    </StrictMode>
  )
}
