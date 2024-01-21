import { Typography } from '@/components/ui/typography'
import { DayInfoItem } from '@/components/weather/days-info/day-info-item'
import { WeatherVariantType } from '@/components/weather/weather-icon-selector/weather-icon-selector'

import s from './days-info.module.scss'

import { Carousel } from '../../carousel'

export type DayInfoType = {
  date: string
  day: string
  icon: WeatherVariantType
  info: string
  temp: string
}
export const days: DayInfoType[] = [
  { date: '19 янв', day: 'Сегодня', icon: 'Snow', info: 'Облачно', temp: '+18°' },
  { date: '20 янв', day: 'Завтра', icon: 'Snow', info: 'Облачно', temp: '+18°' },
  { date: '21 янв', day: 'Понедельник', icon: 'Snow', info: 'Облачно', temp: '+18°' },
  { date: '22 янв', day: 'Вторник', icon: 'Snow', info: 'Облачно', temp: '+18°' },
  { date: '23 янв', day: 'Среда', icon: 'Snow', info: 'Облачно', temp: '+18°' },
  { date: '24 янв', day: 'Четверг', icon: 'Snow', info: 'Облачно', temp: '+18°' },
  { date: '25 янв', day: 'Пятница', icon: 'Snow', info: 'Облачно', temp: '+18°' },
]

export function DaysInfo() {
  return (
    <div className={s.container}>
      <Typography as={'h3'} className={s.title} variant={'h1'}>
        Прогноз на неделю
      </Typography>
      <Carousel>
        {days.map((day, index) => (
          <Carousel.Page key={index}>
            <DayInfoItem day={day} />
          </Carousel.Page>
        ))}
      </Carousel>
    </div>
  )
}
