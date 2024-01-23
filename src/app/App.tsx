import { useEffect } from 'react'

import { useGeolocation } from '@/app/model/hooks/useGeolocation'
import { AppLayout } from '@/layout'
import { Header } from '@/layout/header'
import { MainContent } from '@/layout/mainContent'

export function App() {
  const { getLocation } = useGeolocation()

  useEffect(() => {
    getLocation()
  }, [getLocation])

  return <AppLayout header={<Header />} main={<MainContent />} />
}
