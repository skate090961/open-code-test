import { RequestStatusType } from '@/store/reducers/app-reducer'

export type CoordsType = {
  lat: string
  lon: string
}
export type AddressType = {
  coords: CoordsType
  name: string
}
const initialState = {
  address: [] as AddressType[],
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
        address: action.address,
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

export const setAddress = (address: AddressType[], found: number) =>
  ({ address, found, type: 'ADDRESS/SET-ADDRESS' }) as const

export const setStatusAddress = (status: RequestStatusType) =>
  ({ status, type: 'ADDRESS/SET-STATUS' }) as const
