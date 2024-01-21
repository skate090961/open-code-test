import { instance } from '@/api/api-instance'
import {
  CurrentWeatherResponseType,
  ForecastWeatherResponseType,
} from '@/types/weather-response.types'

export const weatherApi = {
  fetchCurrentWeather(city: string) {
    return instance.get<CurrentWeatherResponseType>('weather', {
      params: {
        q: city,
      },
    })
  },
  fetchForecastWeather(city: string, count: number = 8) {
    return instance.get<ForecastWeatherResponseType>('forecast', {
      params: {
        cnt: count,
        q: city,
      },
    })
  },
}
