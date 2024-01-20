import { ReactNode } from 'react'

import { GlobalError } from '@/components/global-error/global-error'
import { LinearLoader } from '@/components/loader'
import { selectAppStatus } from '@/store/reducers/app-reducer'
import { useAppSelector } from '@/store/store'

type AppLayoutProps = {
  header: ReactNode
  main: ReactNode
}

export function AppLayout({ header, main }: AppLayoutProps) {
  const status = useAppSelector(selectAppStatus)

  return (
    <>
      {status === 'loading' && <LinearLoader />}
      <div className={'container'}>
        {header}
        {main}
      </div>
      <GlobalError />
    </>
  )
}
