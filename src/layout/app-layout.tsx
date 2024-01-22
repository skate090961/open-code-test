import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

import { CitySelector } from '@/components/city-selector/city-selector'
import { GlobalError } from '@/components/global-error/global-error'
import { LinearLoader } from '@/components/linear-loader'
import { useAppSelector } from '@/hooks/useAppSelector'
import { selectStatusAddress } from '@/store/reducers/address-reducer/address-selector'
import { selectAppStatus } from '@/store/reducers/app-reducer'

type AppLayoutProps = {
  header: ReactNode
  main: ReactNode
}

export function AppLayout({ header, main }: AppLayoutProps) {
  const appStatus = useAppSelector(selectAppStatus)
  const addressStatus = useSelector(selectStatusAddress)

  return (
    <div className={'global-container'}>
      {appStatus === 'loading' && <LinearLoader />}
      {addressStatus === 'succeeded' && <CitySelector />}
      <div className={'container'}>
        {header}
        {main}
      </div>
      <GlobalError />
    </div>
  )
}
