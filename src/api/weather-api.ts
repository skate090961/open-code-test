import { instance } from '@/api/api-instance'

export const WeatherApi = {
  fetchWeather() {
    return instance.get('weather', {
      params: {
        q: 'Samara',
      },
    })
  },
}
