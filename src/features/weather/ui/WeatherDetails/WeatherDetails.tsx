import { Typography } from '@/common/components/typography'
import { useDetailsInfo } from '@/features/weather/model/hooks'
import { CurrentWeatherType } from '@/features/weather/model/reducer/weatherReducer.types'
import { WeatherDetailsItem } from '@/features/weather/ui/WeatherDetails/WeatherDetailsItem'

import s from './WeatherDetails.module.scss'

export type DetailsInfoItemType = {
  icon: string
  title: string
  value: number | string
}

type DetailsInfoProps = {
  weather: CurrentWeatherType
}

export function WeatherDetails({ weather }: DetailsInfoProps) {
  const items = useDetailsInfo(weather)

  return (
    <div className={s.root}>
      <Typography as={'h3'} className={s.title} variant={'h1'}>
        Подробности
      </Typography>
      <ul className={s.list}>
        {items.map((item, index) => (
          <WeatherDetailsItem item={item} key={index} />
        ))}
      </ul>
    </div>
  )
}
