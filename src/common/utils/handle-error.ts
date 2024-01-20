import { setAppError } from '@/store/reducers/app-reducer'
import { isAxiosError } from 'axios'
import { Dispatch } from 'redux'

type ServerError = {
  cod: string
  message: string
}

export const handleError = (dispatch: Dispatch, e: unknown) => {
  if (isAxiosError<ServerError>(e)) {
    dispatch(setAppError(e.response ? e.response.data.message : e.message))
  } else {
    console.error(e as Error)
  }
}
