import { WeatherResponseType } from '@/types/weather.types'

const initialState = {
  weather: {} as WeatherResponseType,
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
        weather: action.weather,
      }
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setWeather>

export const setWeather = (weather: any) => ({ type: 'WEATHER/SET-WEATHER', weather }) as const
