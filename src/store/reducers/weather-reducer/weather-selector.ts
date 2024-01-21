import { AppRootState } from '@/store/store'

export const selectCurrentWeather = (state: AppRootState) => state.weather.currentWeather
export const selectForecastWeatherList = (state: AppRootState) => state.weather.forecastWeather.list
export const selectIsInit = (state: AppRootState) => state.weather.isInit
