import { AppRootState } from '@/app/providers/store/store'

export const selectAppStatus = (state: AppRootState) => state.app.status
export const selectErrorMessage = (state: AppRootState) => state.app.error
