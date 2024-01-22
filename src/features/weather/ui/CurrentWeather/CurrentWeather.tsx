import { SharedSvgSelector } from '@/common/components/sharedSvgSelector'
import { Typography } from '@/common/components/typography'
import { WeatherIconSelector } from '@/features/weather/lib'
import { WeatherVariantType } from '@/features/weather/lib/WeatherIconSelector'
import { useTodayInfo } from '@/features/weather/model/hooks'
import { CurrentWeatherType } from '@/features/weather/model/reducer/weatherReducer.types'

import s from './CurrentWeather.module.scss'

type TodayInfoProps = {
  weather: CurrentWeatherType
}

export function CurrentWeather({ weather }: TodayInfoProps) {
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
