import SunCloudIcon from '@/assets/icons/weather-icons/sun-cloud-icon'
import { Typography } from '@/components/ui/typography'
import { DayInfoType } from '@/components/weather/days-info/days-info'

import s from './days-info.module.scss'

type DayInfoItemProps = {
  day: DayInfoType
}

export function DayInfoItem({ day }: DayInfoItemProps) {
  return (
    <div className={s.item}>
      <Typography className={s.day} variant={'h2'}>
        {day.day}
      </Typography>
      <Typography className={s.date}>{day.date}</Typography>
      <SunCloudIcon className={s.icon} />
      <Typography className={s.temp}>{day.temp}</Typography>
      <Typography className={s.info}>{day.info}</Typography>
    </div>
  )
}
