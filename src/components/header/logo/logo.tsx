import LogoIcon from '@/assets/icons/logo-icon'
import { Typography } from '@/components/ui/typography'

import s from './logo.module.scss'
export function Logo() {
  return (
    <div className={s.logo}>
      <LogoIcon className={s.icon} />
      <Typography className={s.title} variant={'h1'}>
        React Weather
      </Typography>
    </div>
  )
}
