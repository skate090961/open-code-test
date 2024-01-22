import { Carousel } from '@/common/components/carousel'
import { Typography } from '@/common/components/typography'
import { formatDateTime } from '@/common/utils'
import { WeatherVariantType } from '@/features/weather/lib/WeatherIconSelector'
import { ForecastWeatherType } from '@/features/weather/model/reducer/weatherReducer.types'
import { ForecastWeatherItem } from '@/features/weather/ui/ForecastWeather/ForecastWeatherItem'

import s from './ForecastWeather.module.scss'

type DaysInfoProps = {
  forecastWeather: ForecastWeatherType[]
}

export function ForecastWeather({ forecastWeather }: DaysInfoProps) {
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
              <ForecastWeatherItem
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
