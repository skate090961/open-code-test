import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { DaysInfo } from '@/components/weather/days-info/days-info'
import { TodayInfo } from '@/components/weather/today-info'
import { selectCurrentWeather } from '@/store/reducers/weather-reducer/weather-selector'
import { fetchWeather } from '@/store/reducers/weather-reducer/weather-thunk'
import { useAppDispatch } from '@/store/store'

import s from './weather.module.scss'

export function Weather() {
  useEffect(() => {
    dispatch(fetchWeather('samara'))
  }, [])
  const dispatch = useAppDispatch()
  const weather = useSelector(selectCurrentWeather)

  return (
    <div className={s.weather}>
      <TodayInfo weather={weather} />
      <div className={s.wrapper}>
        <DaysInfo />
      </div>
    </div>
  )
}
