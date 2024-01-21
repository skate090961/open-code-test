export function formatDate(timestamp: number) {
  const date = new Date(timestamp * 1000)

  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'short' })
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}
