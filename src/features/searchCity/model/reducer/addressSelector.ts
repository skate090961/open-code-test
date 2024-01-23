import { AppRootState } from '@/app/providers/store/store'

export const selectAddress = (state: AppRootState) => state.address.addresses
export const selectAddressStatus = (state: AppRootState) => state.address.status
export const selectFound = (state: AppRootState) => state.address.found
