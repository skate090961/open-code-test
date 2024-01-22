import { useSelector } from 'react-redux'

import { selectIsInit } from '@/store/reducers/weather-reducer/weather-selector'

import s from './main-content.module.scss'

import { Weather } from '../weather'

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
