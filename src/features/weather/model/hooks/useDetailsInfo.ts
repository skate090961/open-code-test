import { useMemo } from 'react'

import { determineWindDirection, formatTime } from '@/common/utils'
import { CurrentWeatherType } from '@/features/weather/model/reducer/weatherReducer'

export function useDetailsInfo(weather: CurrentWeatherType) {
  const sunrise = formatTime(weather.sys.sunrise)
  const sunset = formatTime(weather.sys.sunset)
  const humidity = weather.humidity
  const pressure = Math.floor(weather.pressure * 0.75)
  const windDirection = determineWindDirection(weather.wind.direction)

  return useMemo(
    () => [
      { icon: 'pressure', title: 'Давление', value: `${pressure} мм.рт.cт` },
      { icon: 'wind', title: 'Скорость ветра', value: `${weather.wind.speed} м/с` },
      { icon: 'direction', title: 'Направление ветра', value: windDirection },
      { icon: 'sunrise', title: 'Восход', value: sunrise },
      { icon: 'sunset', title: 'Закат', value: sunset },
      { icon: 'humidity', title: 'Влажность', value: `${humidity}%` },
    ],
    [pressure, weather.wind.speed, windDirection, sunrise, sunset, humidity]
  )
}
