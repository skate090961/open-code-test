import { AppRootState } from '@/store/store'

export const selectAddress = (state: AppRootState) => state.address.address
export const selectIsLoadingAddress = (state: AppRootState) => state.address.isLoading
