import axios from 'axios'

// TODO: To .env file
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = 'c5d7281a9728d59b199f2e575834c1ae'

export const weatherInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    lang: 'ru',
    units: 'metric',
  },
})
