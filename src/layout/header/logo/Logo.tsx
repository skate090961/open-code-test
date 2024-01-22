import { LogoIcon } from '@/common/assets/icons'
import { Typography } from '@/common/components/typography'

import s from './Logo.module.scss'

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
