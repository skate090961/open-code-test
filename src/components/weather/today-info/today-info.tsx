import { SharedSvgSelector } from '@/common/assets/icons/shared/shared-svg-selector'
import { useTodayInfo } from '@/components/weather/today-info/today-info.model'
import {
  WeatherIconSelector,
  WeatherVariantType,
} from '@/components/weather/weather-icon-selector/weather-icon-selector'
import { CurrentWeatherType } from '@/store/reducers/weather-reducer/weather-reducer'

import s from './today-info.module.scss'

import { Typography } from '../../typography'

type TodayInfoProps = {
  weather: CurrentWeatherType
}

export function TodayInfo({ weather }: TodayInfoProps) {
  const { currentDate, description, fellsLikeTemp, icon, temp } = useTodayInfo(weather)

  return (
    <div className={s.root}>
      <div className={s.top}>
        <div className={s.location}>
          <SharedSvgSelector className={s.icon} id={'location'} size={25} />
          <Typography as={'h3'} variant={'h1'}>
            {weather.location}
          </Typography>
        </div>
        <Typography className={s.date}>{`Сегодня, ${currentDate}`}</Typography>
      </div>
      <WeatherIconSelector icon={icon as WeatherVariantType} />
      <Typography className={s.temp} variant={'extra'}>{`${temp}°С`}</Typography>
      <Typography className={s.feelsLike}>{`Ощущается как ${fellsLikeTemp}°С`}</Typography>
      <Typography className={s.description} variant={'h2'}>
        {description}
      </Typography>
    </div>
  )
}
