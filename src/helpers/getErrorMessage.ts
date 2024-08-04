import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export function getErrorMessage(error: FetchBaseQueryError | SerializedError) {
  let errMsg: string | undefined = ''
  if ('status' in error) {
    errMsg = 'error' in error ? error.error : JSON.stringify(error.data)
  } else {
    errMsg = error.message
  }
  return errMsg ?? ''
}
