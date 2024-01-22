import { Typography } from '@/common/components/typography'
import { WeatherIconSelector, WeatherVariantType } from '@/features/weather/lib/WeatherIconSelector'

import s from './ForecastWeather.module.scss'

type DateModelType = {
  date: string
  day: string
  time: string
}
export type DayInfoProps = {
  dateModel: DateModelType
  day: string
  description: string
  icon: WeatherVariantType
  temp: number
}

export function ForecastWeatherItem({ dateModel, description, icon, temp }: DayInfoProps) {
  const { date, day, time } = dateModel

  return (
    <div className={s.item}>
      <div className={s.dateWrapper}>
        <Typography className={s.time}>{time}</Typography>
        <Typography>{date}</Typography>
        <Typography>{day}</Typography>
      </div>
      <WeatherIconSelector className={s.icon} icon={icon} />
      <Typography className={s.temp}>{`${Math.floor(temp)}°С`}</Typography>
      <Typography className={s.info}>{description}</Typography>
    </div>
  )
}
