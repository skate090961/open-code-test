import { useEffect } from 'react'

import { DaysInfo } from '@/components/weather/days-info/days-info'
import { TodayInfo } from '@/components/weather/today-info'
import { fetchWeather } from '@/store/reducers/weather-reducer/weather-thunk'
import { useAppDispatch } from '@/store/store'

import s from './weather.module.scss'

export function Weather() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWeather('samara'))
  }, [])

  return (
    <div className={s.weather}>
      <TodayInfo />
      <div className={s.wrapper}>
        <DaysInfo />
      </div>
    </div>
  )
}
