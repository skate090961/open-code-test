import { CurrentWeatherType } from '@/types/weather.types'

const initialState = {
  currentWeather: {
    main: {
      temp: 0,
    },
  } as CurrentWeatherType,
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
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setWeather>

export const setWeather = (currentWeather: any) =>
  ({ type: 'WEATHER/SET-WEATHER', weather: currentWeather }) as const
