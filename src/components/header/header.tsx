import { Logo } from '@/components/header/logo/logo'
import { SearchForm } from '@/components/search-form'

import s from './header.module.scss'
export function Header() {
  return (
    <header className={s.header}>
      <Logo />
      <SearchForm />
    </header>
  )
}
