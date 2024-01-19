import { Typography } from '@/components/ui/typography'
import { TodayInfoItemType } from '@/components/weather/today-info/today-info'

import s from './today-info.module.scss'

type TodayInfoItemProps = {
  item: TodayInfoItemType
}

export function TodayItem({ item }: TodayInfoItemProps) {
  const { name, value } = item

  return (
    <div className={s.infoItem}>
      <Typography>{name}</Typography>
      <Typography>{value}</Typography>
    </div>
  )
}
