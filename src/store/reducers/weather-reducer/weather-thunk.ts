import { WeatherApi } from '@/api/weather-api'
import { setAppStatus } from '@/store/reducers/app-reducer'
import { setWeather } from '@/store/reducers/weather-reducer/weather-reducer'
import { Dispatch } from 'redux'

export const fetchWeather = (city: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = await WeatherApi.fetchWeather(city)

    dispatch(setWeather(res.data))
    dispatch(setAppStatus('succeeded'))
  } catch (e) {
    dispatch(setAppStatus('failed'))
  }
}
