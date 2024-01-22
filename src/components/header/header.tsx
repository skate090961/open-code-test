import { useEffect } from 'react'

import { Logo } from '@/components/header/logo/logo'
import { SearchForm } from '@/components/search-form'
import { fetchCities } from '@/store/reducers/address-reducer/address-thunk'
import { useAppDispatch } from '@/store/store'

import s from './header.module.scss'

export function Header() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCities('Самара'))
  }, [])

  return (
    <header className={s.header}>
      <Logo />
      <SearchForm />
    </header>
  )
}
