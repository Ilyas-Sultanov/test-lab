import { FunctionComponent, SVGProps } from 'react'
import classes from './RoadMapItem.module.scss'

export type RoadMapItemData = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>
  title: string
  text: string
}

type Props = RoadMapItemData

export function RoadMapItem({ Icon, title, text }: Props) {
  return (
    <div className={classes.roadMapItem}>
      <Icon className={classes.icon} />
      <div className={classes.textContent}>
        <h6 className={classes.title}>{title}</h6>
        <p className={classes.text} >{text}</p>
      </div>
    </div>
  )
}
