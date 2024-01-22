import { SearchForm } from '@/features/searchCity/ui/SearchForm'
import { Logo } from '@/layout/header/logo/Logo'

import s from './Header.module.scss'

export function Header() {
  return (
    <header className={s.header}>
      <Logo />
      <SearchForm />
    </header>
  )
}
