import { AppLayout } from '@/layout'
import { Header } from '@/layout/header'
import { MainContent } from '@/layout/mainContent'

export function App() {
  return <AppLayout header={<Header />} main={<MainContent />} />
}
