import { setAppError } from '@/store/reducers/app-reducer'
import { isAxiosError } from 'axios'
import { Dispatch } from 'redux'

type ErrorType = {
  field: string
  message: string
}
type ServerError = {
  errorMessages: ErrorType[]
}

export const handleError = (dispatch: Dispatch, e: unknown) => {
  if (isAxiosError<ServerError>(e)) {
    dispatch(setAppError(e.response ? e.response.data.errorMessages[0].message : e.message))
  } else {
    console.log(e as Error)
  }
}
