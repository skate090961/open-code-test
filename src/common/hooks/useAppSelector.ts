import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { AppRootState } from '@/app/providers/store/store'

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
