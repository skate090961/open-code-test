export type RequestStatusType = 'failed' | 'idle' | 'loading' | 'succeeded'

const initialState = {
  error: null as null | string,
  status: 'idle' as RequestStatusType,
}

type AppStateType = typeof initialState

export const appReducer = (
  state: AppStateType = initialState,
  action: ActionsType
): AppStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return {
        ...state,
        status: action.status,
      }
    case 'APP/SET-ERROR':
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setAppError> | ReturnType<typeof setAppStatus>

export const setAppStatus = (status: RequestStatusType) =>
  ({ status, type: 'APP/SET-STATUS' }) as const
export const setAppError = (error: null | string) => ({ error, type: 'APP/SET-ERROR' }) as const
