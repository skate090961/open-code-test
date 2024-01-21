import { Typography } from '@/components/ui/typography'
import {
  WeatherIconSelector,
  WeatherVariantType,
} from '@/components/weather/weather-icon-selector/weather-icon-selector'

import s from './days-info.module.scss'

export type DayInfoProps = {
  date: string
  day: string
  description: string
  icon: WeatherVariantType
  temp: number
  tempFeelsLike: number
}

export function DayInfoItem({ date, day, description, icon, temp, tempFeelsLike }: DayInfoProps) {
  return (
    <div className={s.item}>
      <Typography className={s.day} variant={'h2'}>
        {day}
      </Typography>
      <Typography className={s.date}>{date}</Typography>
      <WeatherIconSelector className={s.icon} icon={icon} />
      <Typography className={s.temp}>{`${Math.floor(temp)}°С`}</Typography>
      <Typography className={s.feelsLike} variant={'body2'}>{`${Math.floor(
        tempFeelsLike
      )}°С`}</Typography>
      <Typography className={s.info}>{description}</Typography>
    </div>
  )
}
