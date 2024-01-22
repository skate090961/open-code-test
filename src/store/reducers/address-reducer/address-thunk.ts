import { geocodeMapsApi } from '@/api/geocode-maps-api'
import { handleError } from '@/common/utils/handle-error'
import {
  AddressType,
  setAddress,
  setStatusAddress,
} from '@/store/reducers/address-reducer/address-reducer'
import { setAppStatus } from '@/store/reducers/app-reducer'
import { Dispatch } from 'redux'

export const fetchCities = (city: string) => async (dispatch: Dispatch) => {
  dispatch(setStatusAddress('loading'))
  dispatch(setAppStatus('loading'))
  try {
    const res = await geocodeMapsApi.fetchCities(city)
    const model: AddressType[] = res.data.response.GeoObjectCollection.featureMember.map(data => {
      const updateCoords = data.GeoObject.Point.pos.split(' ')

      return {
        coords: { lat: updateCoords[1], lon: updateCoords[0] },
        name: data.GeoObject.metaDataProperty.GeocoderMetaData.text,
      }
    })
    const found = Number(
      res.data.response.GeoObjectCollection.metaDataProperty.GeocoderResponseMetaData.found
    )

    dispatch(setAddress(model, found))
    dispatch(setAppStatus('succeeded'))
    dispatch(setStatusAddress('succeeded'))
  } catch (e) {
    handleError(dispatch, e)
    dispatch(setAppStatus('failed'))
    dispatch(setStatusAddress('failed'))
  }
}
