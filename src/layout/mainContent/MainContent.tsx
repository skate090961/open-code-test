import { useSelector } from 'react-redux'

import { selectIsInit } from '@/features/weather/model/reducer'
import { Weather } from '@/features/weather/ui/Weather'

import s from './MainContent.module.scss'

export function MainContent() {
  const isInit = useSelector(selectIsInit)

  if (!isInit) {
    return <></>
  }

  return (
    <main className={s.main}>
      <Weather />
    </main>
  )
}
