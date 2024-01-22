import { SharedSvgSelector } from '@/common/assets/icons/shared/shared-svg-selector'
import { useCitySearchForm } from '@/components/search-form/search-form.model'

import s from './search-form.module.scss'

export function SearchForm() {
  const { handleSubmit, isLoading, onSubmit, register } = useCitySearchForm()

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
