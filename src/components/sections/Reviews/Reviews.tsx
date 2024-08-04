import { useAppSelector } from '@/store/store'
import { SimpleSlider } from '@/components/ui/Slider/Slider'
import { ReviewsItem } from './ReviewsItem/ReviewsItem'
import { reviewsSlice } from '@/store/slices/reviews/reviewsSlice'
import classes from './Reviews.module.scss'


export function ReviewsSection() {
  const reviews = useAppSelector(reviewsSlice.selectors.selectReviews)
  return (
    <section className={classes.reviews}>
      <div className='container'>
        <h2 className={classes.title}>Отзывы</h2>
        <SimpleSlider>
          {
            reviews.map((item) => {
              return (
                <ReviewsItem key={item.id} {...item} />
              )
            })
          }
        </SimpleSlider>
      </div>
    </section>
  )
}
