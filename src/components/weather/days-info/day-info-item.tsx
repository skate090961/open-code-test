import { Typography } from '@/components/ui/typography'
import { DayInfoType } from '@/components/weather/days-info/days-info'
import { WeatherIconSelector } from '@/components/weather/weather-icon-selector/weather-icon-selector'

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
      <WeatherIconSelector className={s.icon} icon={day.icon} />
      <Typography className={s.temp}>{day.temp}</Typography>
      <Typography className={s.info}>{day.info}</Typography>
    </div>
  )
}
