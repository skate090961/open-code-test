import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { selectAppStatus } from '@/app/model/reducer'
import { useAppDispatch } from '@/common/hooks'
import { fetchCities, selectAddressStatus } from '@/features/searchCity/model/reducer'

type Inputs = {
  city: string
}

export function useCitySearchForm() {
  const addressStatus = useSelector(selectAddressStatus)
  const appStatus = useSelector(selectAppStatus)
  const isLoading = appStatus === 'loading' && appStatus === 'loading'
  const dispatch = useAppDispatch()
  const { handleSubmit, register, reset } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(fetchCities(data.city))
    reset()
  }

  return {
    addressStatus,
    handleSubmit,
    isLoading,
    onSubmit,
    register,
  }
}
