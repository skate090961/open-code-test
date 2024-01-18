import { Logo } from '@/components/header/logo/logo'
import { TextField } from '@/components/ui/text-field'

import s from './header.module.scss'

export function Header() {
  return (
    <header className={s.header}>
      <Logo />
      <TextField className={s.input} placeholder={'Введите город'} type={'search'} />
    </header>
  )
}
