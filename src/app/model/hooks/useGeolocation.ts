import { useCallback } from 'react'

import { setAppError } from '@/app/model/reducer/appReducer'
import { useAppDispatch } from '@/common/hooks'
import { fetchWeather } from '@/features/weather/model/reducer'

export function useGeolocation() {
  const dispatch = useAppDispatch()

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords

          dispatch(fetchWeather({ lat: String(latitude), lon: String(longitude) }))
        },
        error => {
          dispatch(setAppError(error.message))
        }
      )
    } else {
      dispatch(setAppError('Geolocation is not supported by your browser'))
    }
  }, [dispatch])

  return { getLocation }
}
