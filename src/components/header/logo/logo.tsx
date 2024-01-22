import LogoIcon from '@/common/assets/icons/logo-icon'
import { Typography } from '@/components/typography'

import s from './logo.module.scss'

export function Logo() {
  return (
    <div className={s.logo}>
      <LogoIcon className={s.icon} />
      <Typography className={s.title} variant={'subtitle1'}>
        React Weather App
      </Typography>
    </div>
  )
}
