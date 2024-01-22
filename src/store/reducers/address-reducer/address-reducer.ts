type CoordsType = {
  lat: string
  lon: string
}
export type AddressType = {
  coords: CoordsType
  name: string
}
const initialState = {
  address: [] as AddressType[],
  isLoading: false,
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
      }
    case 'ADDRESS/SET-IS-LOADING-ADDRESS':
      return {
        ...state,
        isLoading: action.isLoading,
      }
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setAddress> | ReturnType<typeof setIsLoadingAddress>

export const setAddress = (address: AddressType[]) =>
  ({ address, type: 'ADDRESS/SET-ADDRESS' }) as const

export const setIsLoadingAddress = (isLoading: boolean) =>
  ({ isLoading, type: 'ADDRESS/SET-IS-LOADING-ADDRESS' }) as const
