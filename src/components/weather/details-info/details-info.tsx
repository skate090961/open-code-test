import { useDetailsInfo } from '@/components/weather/details-info/details-info.model'
import { DetailsInfoItem } from '@/components/weather/details-info/details-info-item'
import { CurrentWeatherType } from '@/store/reducers/weather-reducer/weather-reducer'

import s from './details-info.module.scss'

import { Typography } from '../../typography'

export type DetailsInfoItemType = {
  icon: string
  title: string
  value: number | string
}

type DetailsInfoProps = {
  weather: CurrentWeatherType
}

export function DetailsInfo({ weather }: DetailsInfoProps) {
  const items = useDetailsInfo(weather)

  return (
    <div className={s.root}>
      <Typography as={'h3'} className={s.title} variant={'h1'}>
        Подробности
      </Typography>
      <ul className={s.list}>
        {items.map((item, index) => (
          <DetailsInfoItem item={item} key={index} />
        ))}
      </ul>
    </div>
  )
}
