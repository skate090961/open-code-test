import { ReactNode } from 'react'

import SunCloudIcon from '@/assets/icons/weather-icons/sun-cloud-icon'
import { Typography } from '@/components/ui/typography'
import { DayInfoItem } from '@/components/weather/days-info/day-info-item'

import s from './days-info.module.scss'

import { Carousel } from '../../carousel'

export type DayInfoType = {
  date: string
  day: string
  icon: ReactNode
  info: string
  temp: string
}
export const days: DayInfoType[] = [
  { date: '19 янв', day: 'Сегодня', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
  { date: '20 янв', day: 'Завтра', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
  { date: '21 янв', day: 'Понедельник', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
  { date: '22 янв', day: 'Вторник', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
  { date: '23 янв', day: 'Среда', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
  { date: '24 янв', day: 'Четверг', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
  { date: '25 янв', day: 'Пятница', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
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
