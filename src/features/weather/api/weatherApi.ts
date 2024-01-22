import { weatherInstance } from '@/common/api'
import { CoordsType } from '@/features/searchCity/model/reducer/addressReducer'
import {
  CurrentWeatherResponseType,
  ForecastWeatherResponseType,
} from '@/features/weather/api/weatherResponse.types'

export const weatherApi = {
  fetchCurrentWeather({ lat, lon }: CoordsType) {
    return weatherInstance.get<CurrentWeatherResponseType>('weather', {
      params: {
        lat,
        lon,
      },
    })
  },
  fetchForecastWeather({ lat, lon }: CoordsType) {
    return weatherInstance.get<ForecastWeatherResponseType>('forecast', {
      params: {
        lat,
        lon,
      },
    })
  },
}
