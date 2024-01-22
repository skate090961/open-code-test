import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { SharedSvgSelector } from '@/common/assets/icons/shared/shared-svg-selector'
import { selectStatusAddress } from '@/store/reducers/address-reducer/address-selector'
import { fetchCities } from '@/store/reducers/address-reducer/address-thunk'
import { useAppDispatch } from '@/store/store'

import s from './search-form.module.scss'

type Inputs = {
  city: string
}

export function SearchForm() {
  const statusAddress = useSelector(selectStatusAddress)
  const isLoading = statusAddress === 'loading'
  const dispatch = useAppDispatch()
  const { handleSubmit, register, reset } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(fetchCities(data.city))
    reset()
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.container}>
        <input
          {...register('city', { required: true })}
          className={s.input}
          disabled={isLoading}
          placeholder={'Введите населенный пункт'}
        />
        <SharedSvgSelector className={s.icon} id={'search'} size={20} />
      </div>
      <button className={s.button} disabled={isLoading} type={'submit'}>
        Поиск
      </button>
    </form>
  )
}
