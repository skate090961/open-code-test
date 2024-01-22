import { geocodeMapsInstance } from '@/common/api'
import { AddressResponseType } from '@/features/searchCity/api/addressResponse.types'

export const geocodeMapsApi = {
  fetchCities(city: string) {
    return geocodeMapsInstance.get<AddressResponseType>('cities', {
      params: {
        geocode: city,
      },
    })
  },
}
