import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

import { GlobalError } from '@/app'
import { selectAppStatus } from '@/app/model/reducer'
import { LinearLoader } from '@/common/components/linearLoader'
import { useAppSelector } from '@/common/hooks'
import { selectStatusAddress } from '@/features/searchCity/model/reducer'
import { CitySelector } from '@/features/searchCity/ui/CitySelector'

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
