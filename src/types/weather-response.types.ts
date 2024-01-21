export type CurrentWeatherResponseType = {
  base: string
  clouds: Clouds
  cod: number
  coord: Coord
  dt: number
  id: number
  main: Main
  name: string
  snow: Snow
  sys: SysCurrentWeather
  timezone: number
  visibility: number
  weather: Weather[]
  wind: Wind
}

export type ForecastWeatherResponseType = {
  cnt: number
  cod: string
  list: ForecastWeatherEntityType[]
  message: number
}

export type ForecastWeatherEntityType = {
  clouds: Clouds
  dt: number
  dt_txt: string
  main: Main & { temp_kf: number }
  pop: number
  sys: SysForecastWeather
  visibility: number
  weather: Weather[]
  wind: Wind
}

export type Coord = {
  lat: number
  lon: number
}

export type Weather = {
  description: string
  icon: string
  id: number
  main: string
}

export type Main = {
  feels_like: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_max: number
  temp_min: number
}

export type Wind = {
  deg: number
  gust: number
  speed: number
}

export type Snow = {
  '1h': number
}

export type Clouds = {
  all: number
}

export type SysCurrentWeather = {
  country: string
  sunrise: number
  sunset: number
}

export type SysForecastWeather = { pod: string }
