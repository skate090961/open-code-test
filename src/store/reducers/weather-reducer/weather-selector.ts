import { AppRootState } from '@/store/store'

export const selectCurrentWeather = (state: AppRootState) => state.weather.currentWeather
