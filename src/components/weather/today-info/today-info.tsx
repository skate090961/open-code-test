import { SharedSvgSelector } from '@/common/assets/icons/shared/shared-svg-selector'
import { capitalizeFirstLetter } from '@/common/utils/capitalize-first-letter'
import { formatDate } from '@/common/utils/format-date'
import { Typography } from '@/components/ui/typography'
import {
  WeatherIconSelector,
  WeatherVariantType,
} from '@/components/weather/weather-icon-selector/weather-icon-selector'
import { CurrentWeatherType } from '@/store/reducers/weather-reducer/weather-reducer'

import s from './today-info.module.scss'

type TodayInfoProps = {
  weather: CurrentWeatherType
}

export function TodayInfo({ weather }: TodayInfoProps) {
  const { date, location } = weather
  const currentDate = formatDate(date)
  const temp = Math.floor(weather.temp)
  const fellsLikeTemp = Math.floor(weather.tempFeelsLike)

  const description = capitalizeFirstLetter(weather.description)
  const icon = weather.icon

  return (
    <div className={s.root}>
      <div className={s.top}>
        <div className={s.location}>
          <SharedSvgSelector className={s.icon} id={'location'} size={25} />
          <Typography as={'h3'} variant={'h1'}>
            {location}
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
