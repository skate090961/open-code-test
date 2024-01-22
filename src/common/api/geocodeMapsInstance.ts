import axios from 'axios'

// TODO: To .env file
const BASE_URL = 'https://geocode-maps.yandex.ru/1.x/?'
const API_KEY = 'bd06ef36-f315-47b3-8c0d-53e6172a2eab'

export const geocodeMapsInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
    format: 'json',
    lang: 'ru_RU',
  },
})
