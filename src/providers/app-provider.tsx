import { StrictMode } from 'react'
import { Provider } from 'react-redux'

import { AppPage } from '@/pages/app-page'
import { store } from '@/store/store'

import '@/styles/index.scss'

export function AppProvider() {
  return (
    <StrictMode>
      <Provider store={store}>
        <AppPage />
      </Provider>
    </StrictMode>
  )
}
