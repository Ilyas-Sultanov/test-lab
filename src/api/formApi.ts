import { baseApi } from './api'

export const formApi = baseApi.injectEndpoints({
  endpoints(build) {
    return {
      submitForm: build.mutation<Promise<void>, FormFields>({
        query(formFields) {
          return {
            url: 'form',
            method: 'POST',
            body: formFields,
          }
        },
      })
    }
  },
  overrideExisting: true,
})
