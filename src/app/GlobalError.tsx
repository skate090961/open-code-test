import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { selectErrorMessage } from '@/app/model/reducer'
import { setAppError } from '@/app/model/reducer/appReducer'
import { useAppDispatch, useAppSelector } from '@/common/hooks'

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
