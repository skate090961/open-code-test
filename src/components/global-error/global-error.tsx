import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { selectErrorMessage, setAppError } from '@/store/reducers/app-reducer'

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
