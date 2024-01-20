import axios from 'axios'

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

instance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    appid: import.meta.env.VITE_API_KEY,
  }

  return config
})
export const WeatherApi = {
  fetchWeather() {
    return instance.get('weather', {
      params: {
        q: 'Samara',
      },
    })
  },
}
