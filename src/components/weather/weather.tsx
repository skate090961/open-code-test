import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { DaysInfo } from '@/components/weather/days-info/days-info'
import { DetailsInfo } from '@/components/weather/details-info/details-info'
import { TodayInfo } from '@/components/weather/today-info'
import {
  selectCurrentWeather,
  selectIsLoading,
} from '@/store/reducers/weather-reducer/weather-selector'
import { fetchCurrentWeather } from '@/store/reducers/weather-reducer/weather-thunk'
import { useAppDispatch } from '@/store/store'

import s from './weather.module.scss'

export function Weather() {
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchCurrentWeather('Дубаи'))
  }, [])
  const dispatch = useAppDispatch()
  const currentWeather = useSelector(selectCurrentWeather)

  return (
    <div className={s.weather}>
      {!isLoading && (
        <>
          <TodayInfo weather={currentWeather} />
          <div className={s.wrapper}>
            <DetailsInfo weather={currentWeather} />
            <DaysInfo />
          </div>
        </>
      )}
    </div>
  )
}
