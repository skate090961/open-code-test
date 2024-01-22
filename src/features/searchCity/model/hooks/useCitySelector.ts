import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/common/hooks'
import { selectAddress, selectFound } from '@/features/searchCity/model/reducer'
import { CoordsType, setStatusAddress } from '@/features/searchCity/model/reducer/addressReducer'
import { fetchWeather } from '@/features/weather/model/reducer'

export function useCitySelector() {
  const addresses = useSelector(selectAddress)
  const dispatch = useAppDispatch()
  const found = useSelector(selectFound)

  const handleCloseClick = useCallback(() => {
    dispatch(setStatusAddress('idle'))
  }, [dispatch])

  const handleItemClick = useCallback(
    ({ lat, lon }: CoordsType) => {
      dispatch(fetchWeather({ lat, lon }))
      handleCloseClick()
    },
    [dispatch, handleCloseClick]
  )

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseClick()
      }
    }

    document.addEventListener('keydown', handleEscapeKeyPress)

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress)
    }
  }, [handleCloseClick])

  const label = found ? 'Выберите населенный пункт' : 'Насленный пункт не найден.'

  return {
    addresses,
    handleCloseClick,
    handleItemClick,
    label,
  }
}
