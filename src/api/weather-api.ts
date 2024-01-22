import { weatherInstance } from '@/api/api-weather-instance'
import {
  CurrentWeatherResponseType,
  ForecastWeatherResponseType,
} from '@/types/weather-response.types'

export const weatherApi = {
  fetchCurrentWeather({ lat, lon }: { lat: string; lon: string }) {
    return weatherInstance.get<CurrentWeatherResponseType>('weather', {
      params: {
        lat,
        lon,
      },
    })
  },
  fetchForecastWeather({ lat, lon }: { lat: string; lon: string }) {
    return weatherInstance.get<ForecastWeatherResponseType>('forecast', {
      params: {
        lat,
        lon,
      },
    })
  },
}
