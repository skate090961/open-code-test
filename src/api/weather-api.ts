import { weatherInstance } from '@/api/api-weather-instance'
import { CoordsType } from '@/store/reducers/address-reducer/address-reducer'
import {
  CurrentWeatherResponseType,
  ForecastWeatherResponseType,
} from '@/types/weather-response.types'

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
