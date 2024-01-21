import { WeatherResponseType } from '@/types/weather-response.types'
//TODO: isLoading currentWeather
const initialState = {
  currentWeather: {} as WeatherResponseType,
  isLoading: true,
}

type AppStateType = typeof initialState

export const weatherReducer = (
  state: AppStateType = initialState,
  action: ActionsType
): AppStateType => {
  switch (action.type) {
    case 'WEATHER/SET-WEATHER':
      return {
        ...state,
        currentWeather: action.weather,
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

type ActionsType = ReturnType<typeof setIsLoading> | ReturnType<typeof setWeather>

export const setWeather = (currentWeather: WeatherResponseType) =>
  ({ type: 'WEATHER/SET-WEATHER', weather: currentWeather }) as const

export const setIsLoading = (isLoading: boolean) =>
  ({ isLoading, type: 'WEATHER/SET-IS-LOADING' }) as const
