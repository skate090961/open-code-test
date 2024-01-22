import { capitalizeFirstLetter, formatDate } from '@/common/utils'
import { CurrentWeatherType } from '@/features/weather/model/reducer/weatherReducer.types'

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
