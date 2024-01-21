import { weatherApi } from '@/api/weather-api'
import { handleError } from '@/common/utils/handle-error'
import { setAppStatus } from '@/store/reducers/app-reducer'
import {
  ForecastWeatherType,
  setCurrentWeather,
  setForecastWeather,
  setIsInit,
} from '@/store/reducers/weather-reducer/weather-reducer'
import { Dispatch } from 'redux'

export const fetchWeather =
  (city: string, count: number = 8) =>
  async (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
      const currentWeather = await weatherApi.fetchCurrentWeather(city)

      dispatch(setCurrentWeather(currentWeather.data))

      const forecastWeather = await weatherApi.fetchForecastWeather(city, count)
      const forecastWeatherModel: ForecastWeatherType = {
        count: forecastWeather.data.cnt,
        list: forecastWeather.data.list,
      }

      dispatch(setForecastWeather(forecastWeatherModel))
      dispatch(setAppStatus('succeeded'))
      dispatch(setIsInit(true))
    } catch (e) {
      handleError(dispatch, e)
      dispatch(setAppStatus('failed'))
    }
  }
