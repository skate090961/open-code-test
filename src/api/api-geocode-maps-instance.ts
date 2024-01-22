import axios from 'axios'

export const geocodeMapsInstance = axios.create({
  baseURL: 'https://geocode-maps.yandex.ru/1.x/?',
  params: {
    apikey: 'bd06ef36-f315-47b3-8c0d-53e6172a2eab',
    format: 'json',
    lang: 'ru_RU',
  },
})
