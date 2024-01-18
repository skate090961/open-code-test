import LogoIcon from '@/assets/icons/logo-icon'
import { TextField } from '@/components/ui/text-field'

export function Header() {
  return (
    <header>
      <LogoIcon />
      React Weather
      <TextField placeholder={'Введите город'} type={'search'} />
    </header>
  )
}
