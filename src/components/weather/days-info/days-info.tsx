import { formatDateTime } from '@/common/utils/format-date-time'
import { Typography } from '@/components/ui/typography'
import { DayInfoItem } from '@/components/weather/days-info/day-info-item'
import { WeatherVariantType } from '@/components/weather/weather-icon-selector/weather-icon-selector'
import { ForecastWeatherType } from '@/store/reducers/weather-reducer/weather-reducer'

import s from './days-info.module.scss'

import { Carousel } from '../../carousel'

type DaysInfoProps = {
  forecastWeather: ForecastWeatherType[]
}

export function DaysInfo({ forecastWeather }: DaysInfoProps) {
  return (
    <div className={s.container}>
      <Typography as={'h3'} className={s.title} variant={'h1'}>
        Прогноз на 5 дней
      </Typography>
      <Carousel>
        {forecastWeather.map((day, index) => {
          const date = formatDateTime(day.date)

          return (
            <Carousel.Page key={index}>
              <DayInfoItem
                dateModel={date}
                day={'День'}
                description={day.description}
                icon={day.icon as WeatherVariantType}
                temp={day.temp}
              />
            </Carousel.Page>
          )
        })}
      </Carousel>
    </div>
  )
}
