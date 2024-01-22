import { geocodeMapsInstance } from '@/api/api-geocode-maps-instance'
import { AddressResponseType } from '@/types/address-response.types'

export const geocodeMapsApi = {
  fetchCities(city: string) {
    return geocodeMapsInstance.get<AddressResponseType>('cities', {
      params: {
        geocode: city,
      },
    })
  },
}
