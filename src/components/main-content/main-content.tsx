import s from './main-content.module.scss'

import { Weather } from '../weather'

export function MainContent() {
  return (
    <main className={s.main}>
      <Weather />
    </main>
  )
}
