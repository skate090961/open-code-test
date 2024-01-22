import { useSelector } from 'react-redux'

import { selectCurrentWeather, selectForecastWeatherList } from '@/features/weather/model/reducer'
import { CurrentWeather } from '@/features/weather/ui/CurrentWeather'
import { ForecastWeather } from '@/features/weather/ui/ForecastWeather'
import { WeatherDetails } from '@/features/weather/ui/WeatherDetails'

import s from './Weather.module.scss'

export function Weather() {
  const currentWeather = useSelector(selectCurrentWeather)
  const forecastWeatherList = useSelector(selectForecastWeatherList)

  return (
    <div className={s.weather}>
      <CurrentWeather weather={currentWeather} />
      <div className={s.wrapper}>
        <WeatherDetails weather={currentWeather} />
        <ForecastWeather forecastWeather={forecastWeatherList} />
      </div>
    </div>
  )
}
