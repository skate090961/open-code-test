import { instance } from '@/api/api-instance'
import { WeatherResponseType } from '@/types/weather-response.types'

export const WeatherApi = {
  fetchWeather(city: string) {
    return instance.get<WeatherResponseType>('weather', {
      params: {
        q: city,
      },
    })
  },
}
