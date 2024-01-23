import { appReducer } from '@/app/model/reducer'
import { addressReducer } from '@/features/searchCity/model/reducer'
import { weatherReducer } from '@/features/weather/model/reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  address: addressReducer,
  app: appReducer,
  weather: weatherReducer,
})
