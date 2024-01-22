import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { selectStatusAddress } from '@/store/reducers/address-reducer/address-selector'
import { fetchCities } from '@/store/reducers/address-reducer/address-thunk'

type Inputs = {
  city: string
}

export function useCitySearchForm() {
  const statusAddress = useSelector(selectStatusAddress)
  const isLoading = statusAddress === 'loading'
  const dispatch = useAppDispatch()
  const { handleSubmit, register, reset } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(fetchCities(data.city))
    reset()
  }

  return {
    handleSubmit,
    isLoading,
    onSubmit,
    register,
  }
}
