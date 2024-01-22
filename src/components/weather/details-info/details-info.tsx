import { determineWindDirection } from '@/common/utils/determine-wind-direction'
import { formatTime } from '@/common/utils/format-time'
import { Typography } from '@/components/ui/typography'
import { DetailsInfoItem } from '@/components/weather/details-info/details-info-item'
import { CurrentWeatherType } from '@/store/reducers/weather-reducer/weather-reducer'

import s from './details-info.module.scss'

export type DetailsInfoItemType = {
  icon: string
  title: string
  value: number | string
}

type DetailsInfoProps = {
  weather: CurrentWeatherType
}

export function DetailsInfo({ weather }: DetailsInfoProps) {
  const sunrise = formatTime(weather.sys.sunrise)
  const sunset = formatTime(weather.sys.sunset)
  const humidity = weather.humidity
  const pressure = Math.floor(weather.pressure * 0.75)
  const windDirection = determineWindDirection(weather.wind.direction)
  const items = [
    { icon: 'pressure', title: 'Давление', value: `${pressure} мм.рт.cт` },
    { icon: 'wind', title: 'Скорость ветра', value: `${weather.wind.speed} м/с` },
    { icon: 'direction', title: 'Направление ветра', value: windDirection },
    { icon: 'sunrise', title: 'Восход', value: sunrise },
    { icon: 'sunset', title: 'Закат', value: sunset },
    { icon: 'humidity', title: 'Влажность', value: `${humidity}%` },
  ]

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
