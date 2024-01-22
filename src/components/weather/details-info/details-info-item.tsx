import { SharedSvgSelector } from '@/common/assets/icons/shared/shared-svg-selector'
import { DetailsInfoItemType } from '@/components/weather/details-info/details-info'

import s from './details-info.module.scss'

import { Typography } from '../../typography'
type DetailsInfoItemProps = {
  item: DetailsInfoItemType
}

export function DetailsInfoItem({ item }: DetailsInfoItemProps) {
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
