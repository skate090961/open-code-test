import { ReactNode } from 'react'

type AppLayoutProps = {
  header: ReactNode
  main: ReactNode
}

export function AppLayout({ header, main }: AppLayoutProps) {
  return (
    <div className={'container'}>
      {header}
      {main}
    </div>
  )
}
