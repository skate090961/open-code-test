import { geocodeMapsApi } from '@/api/geocode-maps-api'
import { handleError } from '@/common/utils/handle-error'
import {
  AddressType,
  setAddress,
  setIsLoadingAddress,
} from '@/store/reducers/address-reducer/address-reducer'
import { Dispatch } from 'redux'

export const fetchCities = (city: string) => async (dispatch: Dispatch) => {
  dispatch(setIsLoadingAddress(true))
  try {
    const res = await geocodeMapsApi.fetchCities(city)
    const model: AddressType[] = res.data.response.GeoObjectCollection.featureMember.map(data => {
      const updateCoords = data.GeoObject.Point.pos.split(' ')

      return {
        coords: { lat: updateCoords[1], lon: updateCoords[0] },
        name: data.GeoObject.metaDataProperty.GeocoderMetaData.text,
      }
    })

    dispatch(setAddress(model))
  } catch (e) {
    handleError(dispatch, e)
  } finally {
    dispatch(setIsLoadingAddress(false))
  }
}
