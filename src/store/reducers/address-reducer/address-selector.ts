import { AppRootState } from '@/store/store'

export const selectAddress = (state: AppRootState) => state.address.addresses
export const selectStatusAddress = (state: AppRootState) => state.address.status
export const selectFound = (state: AppRootState) => state.address.found
