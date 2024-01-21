export function formatDateTime(dateTimeString: string): {
  date: string
  day: string
  time: string
} {
  const date = new Date(dateTimeString)

  const weekdays: string[] = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ]
  const dayOfWeek: string = weekdays[date.getDay()]

  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' }
  const formattedDate: string = date.toLocaleDateString('ru-RU', options)

  const time: string = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })

  return {
    date: formattedDate,
    day: dayOfWeek,
    time: time,
  }
}
