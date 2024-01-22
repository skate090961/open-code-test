import { weatherApi } from '@/api/weather-api'
import { handleError } from '@/common/utils/handle-error'
import { setAppStatus } from '@/store/reducers/app-reducer'
import {
  CurrentWeatherType,
  ForecastWeatherType,
  setCurrentWeather,
  setForecastWeather,
  setIsInit,
} from '@/store/reducers/weather-reducer/weather-reducer'
import { Dispatch } from 'redux'

export const fetchWeather =
  ({ lat, lon }: { lat: string; lon: string }) =>
  async (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    try {
      const currentWeatherResponse = await weatherApi.fetchCurrentWeather({ lat, lon })
      const { data } = currentWeatherResponse
      const currentWeatherModel: CurrentWeatherType = {
        date: data.dt,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        icon: data.weather[0].main,
        location: data.name,
        pressure: data.main.pressure,
        sys: { sunrise: data.sys.sunrise, sunset: data.sys.sunset },
        temp: data.main.temp,
        tempFeelsLike: data.main.feels_like,
        wind: {
          direction: data.wind.deg,
          speed: data.wind.speed,
        },
      }

      dispatch(setCurrentWeather(currentWeatherModel))

      const forecastWeather = await weatherApi.fetchForecastWeather({ lat, lon })
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
