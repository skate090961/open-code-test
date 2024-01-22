type SysType = {
  sunrise: number
  sunset: number
}
type WindType = {
  direction: number
  speed: number
}
export type CurrentWeatherType = {
  date: number
  description: string
  humidity: number
  icon: string
  location: string
  pressure: number
  sys: SysType
  temp: number
  tempFeelsLike: number
  wind: WindType
}

export type ForecastWeatherType = {
  date: string
  description: string
  icon: string
  temp: number
}
