export type CurrentWeatherType = {
  main: {
    feelsLike: number
    humidity: number
    pressure: number
    temp: number
  }
  name: string
  sys: {
    sunrise: number
    sunset: number
  }
  timezone: number
  weather: {
    description: string
    icon: string
    main: string
  }
}
