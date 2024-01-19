import { TodayInfo } from '@/components/weather/today-info'

import s from './weather.module.scss'

export function Weather() {
  return (
    <div className={s.weather}>
      <TodayInfo />
      <div>2</div>
    </div>
  )
}
