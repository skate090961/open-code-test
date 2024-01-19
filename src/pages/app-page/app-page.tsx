import { Header } from '@/components/header'
import { AppLayout } from '@/layout/app-layout'

import { MainContent } from '../../components/main-content'

export function AppPage() {
  return <AppLayout header={<Header />} main={<MainContent />} />
}
