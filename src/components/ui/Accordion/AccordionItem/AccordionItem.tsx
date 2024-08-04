import { useState } from 'react'
import classnames from 'classnames'
import { PlusIcon } from '@/components/ui/Icons'
import classes from './AccordionItem.module.scss'

type Props = {
  label: string
  text: string
}

export function AccordionItem({ label, text }: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const cssClasses = classnames(classes.accordionItem, {
    [classes.expanded]: isExpanded,
  })

  return (
    <div className={cssClasses}>
      <button
        type='button'
        className={classes.btn}
        onClick={() => setIsExpanded((prev) => !prev)}
      > 
        <span className={classes.label}>{label}</span>
        <PlusIcon className={classes.icon} />
      </button>
      <div className={classes.contentBox}>
        <div className={classes.content}>
          {text}
        </div>
      </div>
    </div>
  )
}
