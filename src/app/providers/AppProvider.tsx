import { StrictMode } from 'react'
import { Provider } from 'react-redux'

import { App } from '@/app'
import { store } from '@/app/providers/store'

import '@/styles/index.scss'

export function AppProvider() {
  return (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  )
}
