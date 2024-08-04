import { createSlice } from '@reduxjs/toolkit'
import { Review } from '@/models/review'
import imgUrl0 from '@/assets/images/jpeg/reviews-photo0.jpeg'
import imgUrl1 from '@/assets/images/jpeg/reviews-photo1.jpeg'
import imgUrl2 from '@/assets/images/jpeg/reviews-photo2.jpeg'
import imgUrl3 from '@/assets/images/jpeg/reviews-photo3.jpeg'
import imgUrl4 from '@/assets/images/jpeg/reviews-photo0.jpeg'

const initialState: Array<Review> = [
  {
    id: 1,
    photoUrl: imgUrl0,
    name: 'Константинов Михаил Павлович',
    city: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы',
  },
  {
    id: 2,
    photoUrl: imgUrl1,
    name: 'Константинов Михаил Павлович',
    city: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы',
  },
  {
    id: 3,
    photoUrl: imgUrl2,
    name: 'Иван Иванов',
    city: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
  },
  {
    id: 4,
    photoUrl: imgUrl3,
    name: 'Артем Корнилов',
    city: 'Самара',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
  },
  {
    id: 5,
    photoUrl: imgUrl4,
    name: 'Аноним',
    city: 'Не известен',
    text: 'Какой-то текст. Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
  },
]

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviews: (reviews) => reviews
  },
  reducers: {},
})

export default reviewsSlice.reducer
