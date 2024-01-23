import { RequestStatusType } from '@/app/model/reducer/appReducer'

export type CoordsType = {
  lat: string
  lon: string
}
export type AddressType = {
  coords: CoordsType
  name: string
}
const initialState = {
  addresses: [] as AddressType[],
  found: 0,
  status: 'idle' as RequestStatusType,
}

type AppStateType = typeof initialState

export const addressReducer = (
  state: AppStateType = initialState,
  action: ActionsType
): AppStateType => {
  switch (action.type) {
    case 'ADDRESS/SET-ADDRESS':
      return {
        ...state,
        addresses: action.addresses,
        found: action.found,
      }
    case 'ADDRESS/SET-STATUS':
      return {
        ...state,
        status: action.status,
      }
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setAddress> | ReturnType<typeof setStatusAddress>

export const setAddress = (addresses: AddressType[], found: number) =>
  ({ addresses, found, type: 'ADDRESS/SET-ADDRESS' }) as const

export const setStatusAddress = (status: RequestStatusType) =>
  ({ status, type: 'ADDRESS/SET-STATUS' }) as const
