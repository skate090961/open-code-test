import { SharedSvgSelector } from '@/common/components/sharedSvgSelector'
import { Typography } from '@/common/components/typography'
import { DetailsInfoItemType } from '@/features/weather/ui/WeatherDetails/WeatherDetails'

import s from './WeatherDetails.module.scss'

type DetailsInfoItemProps = {
  item: DetailsInfoItemType
}

export function WeatherDetailsItem({ item }: DetailsInfoItemProps) {
  const { icon, title, value } = item

  return (
    <li className={s.item}>
      <div className={s.title}>
        <SharedSvgSelector id={icon} size={25} />
        <Typography>{title}</Typography>
      </div>
      <Typography className={s.value} variant={'body1'}>
        {value}
      </Typography>
    </li>
  )
}
