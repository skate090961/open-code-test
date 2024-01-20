import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { selectErrorMessage, setAppError } from '@/store/reducers/app-reducer'
import { useAppDispatch, useAppSelector } from '@/store/store'

export function GlobalError() {
  const errorMessage = useAppSelector(selectErrorMessage)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setAppError(null))
    }
  }, [dispatch, errorMessage])

  return <ToastContainer autoClose={3000} position={'bottom-left'} theme={'light'} />
}
