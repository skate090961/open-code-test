import { weatherApi } from '@/api/weather-api'
import { handleError } from '@/common/utils/handle-error'
import { setAppStatus } from '@/store/reducers/app-reducer'
import {
  ForecastWeatherType,
  setCurrentWeather,
  setForecastWeather,
  setIsLoading,
} from '@/store/reducers/weather-reducer/weather-reducer'
import { Dispatch } from 'redux'

export const fetchCurrentWeather = (city: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))
  dispatch(setIsLoading(true))
  try {
    const res = await weatherApi.fetchCurrentWeather(city)

    dispatch(setCurrentWeather(res.data))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    dispatch(setAppStatus('failed'))
    handleError(dispatch, e)
  } finally {
    dispatch(setIsLoading(false))
  }
}

export const fetchForecastWeather =
  (city: string, count: number = 8) =>
  async (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    dispatch(setIsLoading(true))
    try {
      const res = await weatherApi.fetchForecastWeather(city, count)
      const forecastWeatherModel: ForecastWeatherType = { count: res.data.cnt, list: res.data.list }

      dispatch(setForecastWeather(forecastWeatherModel))
      dispatch(setAppStatus('succeeded'))
    } catch (e) {
      dispatch(setAppStatus('failed'))
      handleError(dispatch, e)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
