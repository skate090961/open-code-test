import { Header } from '@/components/header'
import { MainContent } from '@/components/main-content'
import { AppLayout } from '@/layout/app-layout'

export function AppPage() {
  return <AppLayout header={<Header />} main={<MainContent />} />
}
