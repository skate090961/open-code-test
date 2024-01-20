import SunCloudIcon from '@/common/assets/icons/weather-icons/sun-cloud-icon'
import { Typography } from '@/components/ui/typography'
import { TodayInfoItem } from '@/components/weather/today-info/today-info-item'
import { WeatherIconSelector } from '@/components/weather/weather-icon-selector/weather-icon-selector'
import { CurrentWeatherType } from '@/types/weather.types'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosSunny } from 'react-icons/io'
import { PiSunHorizonFill } from 'react-icons/pi'

import s from './today-info.module.scss'

export type TodayInfoItemType = {
  name: string
  value: string
}
type TodayInfoProps = {
  weather: CurrentWeatherType
}
export function TodayInfo({ weather }: TodayInfoProps) {
  const items = [
    { name: 'Ощущается как', value: '14°' },
    { name: 'Осадки', value: 'без осадков' },
    { name: 'Давление', value: '765 мм.рт.ст.' },
    { name: 'Ветер', value: '3 м/с юго-запад' },
  ]

  return (
    <div className={s.root}>
      <div className={s.location}>
        <FaLocationDot className={s.icon} />
        <Typography as={'h3'} variant={'h1'}>
          Самара, Россия
        </Typography>
      </div>
      <Typography className={s.todayInfo}>Сегодня, 11 января 2023</Typography>
      <div className={s.weatherIconWrapper}>
        <WeatherIconSelector icon={'Snow'} />
      </div>
      <Typography className={s.degree}>{`${Math.floor(weather.main.temp)}°С`}</Typography>
      <div className={s.infoWrapper}>
        <div className={s.line}></div>
        <div className={s.infoList}>
          {items.map(item => (
            <TodayInfoItem item={item} key={item.value} />
          ))}
        </div>
        <div className={s.line}></div>
        <div className={s.infoList}>
          <div className={s.infoItem}>
            <IoIosSunny className={s.icon} />
            <Typography className={s.time}>5:30</Typography>
          </div>
          <div className={s.infoItem}>
            <PiSunHorizonFill className={s.icon} />
            <Typography className={s.time}>21:45</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
