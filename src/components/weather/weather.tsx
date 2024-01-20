import { useEffect } from 'react'

import { WeatherApi } from '@/api/weather-api'
import { DaysInfo } from '@/components/weather/days-info/days-info'
import { TodayInfo } from '@/components/weather/today-info'

import s from './weather.module.scss'

export function Weather() {
  useEffect(() => {
    WeatherApi.fetchWeather()
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
