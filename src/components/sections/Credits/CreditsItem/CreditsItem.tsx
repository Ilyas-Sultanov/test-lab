import classes from './CreditsItem.module.scss'

type Props = {
  title: string
  text: string
}

export function CreditsItem({ title, text }: Props) {
  return (
    <article className={classes.creditsItem}>
      <h4 className={classes.title}>{title}</h4>
      <p className={classes.text}>{text}</p>
    </article>
  )
}
