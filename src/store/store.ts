import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { baseApi } from '@/api/api'
import reviewsReducer from './slices/reviews/reviewsSlice'

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware)
  }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<typeof store>
