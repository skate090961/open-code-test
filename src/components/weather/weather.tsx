import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { DaysInfo } from '@/components/weather/days-info/days-info'
import { DetailsInfo } from '@/components/weather/details-info/details-info'
import { TodayInfo } from '@/components/weather/today-info'
import {
  selectCurrentWeather,
  selectForecastWeatherList,
  selectIsInit,
} from '@/store/reducers/weather-reducer/weather-selector'
import { fetchWeather } from '@/store/reducers/weather-reducer/weather-thunk'
import { useAppDispatch } from '@/store/store'

import s from './weather.module.scss'

export function Weather() {
  const isInit = useSelector(selectIsInit)

  useEffect(() => {
    dispatch(fetchWeather('Москва'))
  }, [])
  const dispatch = useAppDispatch()
  const currentWeather = useSelector(selectCurrentWeather)
  const forecastWeatherList = useSelector(selectForecastWeatherList)

  if (!isInit) {
    return <></>
  }

  return (
    <div className={s.weather}>
      <>
        <TodayInfo weather={currentWeather} />
        <div className={s.wrapper}>
          <DetailsInfo weather={currentWeather} />
          <DaysInfo forecastWeather={forecastWeatherList} />
        </div>
      </>
    </div>
  )
}
