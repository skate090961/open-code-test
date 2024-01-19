import { ReactNode } from 'react'

import SunCloudIcon from '@/assets/icons/weather-icons/sun-cloud-icon'
import { Carousel } from '@/components/carousel'
import { DayInfoItem } from '@/components/weather/days-info/day-info-item'

export type DayInfoType = {
  date: string
  day: string
  icon: ReactNode
  info: string
  temp: string
}

export function DaysInfo() {
  const days: DayInfoType[] = [
    { date: '19 янв', day: 'Сегодня', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
    { date: '20 янв', day: 'Завтра', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
    { date: '21 янв', day: 'Понедельник', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
    { date: '22 янв', day: 'Вторник', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
    { date: '23 янв', day: 'Среда', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
    { date: '24 янв', day: 'Четверг', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
    { date: '25 янв', day: 'Пятница', icon: <SunCloudIcon />, info: 'Облачно', temp: '+18°' },
  ]

  return (
    <Carousel>
      {days.map((day, index) => (
        <DayInfoItem day={day} key={index} />
      ))}
    </Carousel>
  )
}
