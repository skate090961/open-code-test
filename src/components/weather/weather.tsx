import { DaysInfo } from '@/components/weather/days-info/days-info'
import { TodayInfo } from '@/components/weather/today-info'

import s from './weather.module.scss'

export function Weather() {
  return (
    <div className={s.weather}>
      <TodayInfo />
      <DaysInfo />
    </div>
  )
}
