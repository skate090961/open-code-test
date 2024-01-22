import { useSelector } from 'react-redux'

import { DaysInfo } from '@/components/weather/days-info/days-info'
import { DetailsInfo } from '@/components/weather/details-info/details-info'
import { TodayInfo } from '@/components/weather/today-info'
import {
  selectCurrentWeather,
  selectForecastWeatherList,
} from '@/store/reducers/weather-reducer/weather-selector'

import s from './weather.module.scss'

export function Weather() {
  const currentWeather = useSelector(selectCurrentWeather)
  const forecastWeatherList = useSelector(selectForecastWeatherList)

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
