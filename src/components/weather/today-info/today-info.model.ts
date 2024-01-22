import { capitalizeFirstLetter } from '@/common/utils/capitalize-first-letter'
import { formatDate } from '@/common/utils/format-date'
import { CurrentWeatherType } from '@/store/reducers/weather-reducer/weather-reducer'

export function useTodayInfo(weather: CurrentWeatherType) {
  const currentDate = formatDate(weather.date)
  const temp = Math.floor(weather.temp)
  const fellsLikeTemp = Math.floor(weather.tempFeelsLike)

  const description = capitalizeFirstLetter(weather.description)
  const icon = weather.icon

  return {
    currentDate,
    description,
    fellsLikeTemp,
    icon,
    temp,
  }
}
