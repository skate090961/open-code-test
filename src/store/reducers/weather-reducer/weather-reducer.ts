import {
  CurrentWeatherResponseType,
  ForecastWeatherEntityType,
} from '@/types/weather-response.types'

export type ForecastWeatherType = {
  count: number
  list: ForecastWeatherEntityType[]
}

const initialState = {
  currentWeather: {} as CurrentWeatherResponseType,
  forecastWeather: {} as ForecastWeatherType,
  isLoading: true,
}

type AppStateType = typeof initialState

export const weatherReducer = (
  state: AppStateType = initialState,
  action: ActionsType
): AppStateType => {
  switch (action.type) {
    case 'WEATHER/SET-CURRENT-WEATHER':
      return {
        ...state,
        currentWeather: action.currentWeather,
      }
    case 'WEATHER/SET-FORECAST-WEATHER':
      return {
        ...state,
        forecastWeather: action.forecastWeather,
      }
    case 'WEATHER/SET-IS-LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      }
    default:
      return state
  }
}

type ActionsType =
  | ReturnType<typeof setCurrentWeather>
  | ReturnType<typeof setForecastWeather>
  | ReturnType<typeof setIsLoading>

export const setCurrentWeather = (currentWeather: CurrentWeatherResponseType) =>
  ({ currentWeather, type: 'WEATHER/SET-CURRENT-WEATHER' }) as const
export const setForecastWeather = (forecastWeather: ForecastWeatherType) =>
  ({ forecastWeather, type: 'WEATHER/SET-FORECAST-WEATHER' }) as const

export const setIsLoading = (isLoading: boolean) =>
  ({ isLoading, type: 'WEATHER/SET-IS-LOADING' }) as const
