import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

import { GlobalError } from '@/components/global-error/global-error'
import { LinearLoader } from '@/components/linear-loader'
import { Popup } from '@/components/popup/popup'
import { setStatusAddress } from '@/store/reducers/address-reducer/address-reducer'
import {
  selectAddress,
  selectStatusAddress,
} from '@/store/reducers/address-reducer/address-selector'
import { selectAppStatus } from '@/store/reducers/app-reducer'
import { useAppDispatch, useAppSelector } from '@/store/store'

type AppLayoutProps = {
  header: ReactNode
  main: ReactNode
}

export function AppLayout({ header, main }: AppLayoutProps) {
  const appStatus = useAppSelector(selectAppStatus)
  const addressStatus = useSelector(selectStatusAddress)
  const addresses = useSelector(selectAddress)
  const dispatch = useAppDispatch()
  const closePopup = () => {
    dispatch(setStatusAddress('idle'))
  }

  return (
    <div className={'global-container'}>
      {appStatus === 'loading' && <LinearLoader />}
      {addressStatus === 'succeeded' && <Popup close={closePopup} items={addresses} />}
      <div className={'container'}>
        {header}
        {main}
      </div>
      <GlobalError />
    </div>
  )
}
