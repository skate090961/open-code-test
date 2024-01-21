import { formatDateTime } from '@/common/utils/format-date-time'
import { Typography } from '@/components/ui/typography'
import { DayInfoItem } from '@/components/weather/days-info/day-info-item'
import { WeatherVariantType } from '@/components/weather/weather-icon-selector/weather-icon-selector'
import { ForecastWeatherEntityType } from '@/types/weather-response.types'

import s from './days-info.module.scss'

import { Carousel } from '../../carousel'

type DaysInfoProps = {
  forecastWeather: ForecastWeatherEntityType[]
}

export function DaysInfo({ forecastWeather }: DaysInfoProps) {
  return (
    <div className={s.container}>
      <Typography as={'h3'} className={s.title} variant={'h1'}>
        Прогноз на 5 дней
      </Typography>
      <Carousel>
        {forecastWeather.map((day, index) => {
          const { dt_txt, main, weather } = day
          const date = formatDateTime(dt_txt)

          return (
            <Carousel.Page key={index}>
              <DayInfoItem
                dateModel={date}
                day={'День'}
                description={weather[0].description}
                icon={weather[0].main as WeatherVariantType}
                temp={main.temp}
              />
            </Carousel.Page>
          )
        })}
      </Carousel>
    </div>
  )
}
