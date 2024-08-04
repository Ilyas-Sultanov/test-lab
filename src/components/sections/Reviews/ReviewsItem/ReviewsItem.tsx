import { Review } from '@/models/review'
import classes from './ReviewsItem.module.scss'

type Props = Review

export function ReviewsItem({ photoUrl, name, city, text }: Props) {
  return (
    <div className={classes.reviewsItem}>
      <div className={classes.header}>
        <div className={classes.imgWrapper}>
          <img src={photoUrl} alt="reviewer image" className={classes.img} />
        </div>
        <div className={classes.info}>
          <h6 className={classes.name}>{name}</h6>
          <span className={classes.city}>{city}</span>
        </div>
      </div>
      <p className={classes.text}>
        {text}
      </p>
    </div>
  )
}
