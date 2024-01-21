import { AppRootState } from '@/store/store'

export const selectCurrentWeather = (state: AppRootState) => state.weather.currentWeather
export const selectIsLoading = (state: AppRootState) => state.weather.isLoading
