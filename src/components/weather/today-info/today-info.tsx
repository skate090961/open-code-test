import { SharedSvgSelector } from '@/common/assets/icons/shared/shared-svg-selector'
import { capitalizeFirstLetter } from '@/common/utils/capitalize-first-letter'
import { formatDate } from '@/common/utils/format-date'
import { Typography } from '@/components/ui/typography'
import {
  WeatherIconSelector,
  WeatherVariantType,
} from '@/components/weather/weather-icon-selector/weather-icon-selector'
import { CurrentWeatherResponseType } from '@/types/weather-response.types'

import s from './today-info.module.scss'

type TodayInfoProps = {
  weather: CurrentWeatherResponseType
}

export function TodayInfo({ weather }: TodayInfoProps) {
  const { dt, main, name } = weather
  const currentDate = formatDate(dt)
  const temp = Math.floor(weather.main.temp)
  const fellsLikeTemp = Math.floor(main.feels_like)

  const description = capitalizeFirstLetter(weather.weather[0].description)
  const icon = weather.weather[0].main

  return (
    <div className={s.root}>
      <div className={s.top}>
        <div className={s.location}>
          <SharedSvgSelector className={s.icon} id={'location'} size={25} />
          <Typography as={'h3'} variant={'h1'}>
            {name}
          </Typography>
        </div>
        <Typography className={s.date}>{`Сегодня, ${currentDate}`}</Typography>
      </div>
      <div className={s.line}></div>
      <WeatherIconSelector icon={icon as WeatherVariantType} />
      <Typography className={s.temp} variant={'extra'}>{`${temp}°С`}</Typography>
      <Typography className={s.feelsLike}>{`Ощущается как ${fellsLikeTemp}°С`}</Typography>
      <Typography className={s.description} variant={'h2'}>
        {description}
      </Typography>
    </div>
  )
}
