import { addressReducer } from '@/store/reducers/address-reducer/address-reducer'
import { appReducer } from '@/store/reducers/app-reducer'
import { weatherReducer } from '@/store/reducers/weather-reducer/weather-reducer'
import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'

const rootReducer = combineReducers({
  address: addressReducer,
  app: appReducer,
  weather: weatherReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>

//@ts-ignore
window.store = store
