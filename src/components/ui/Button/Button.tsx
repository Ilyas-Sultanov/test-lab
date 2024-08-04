import { DetailedHTMLProps, ButtonHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'
import classes from './Button.module.scss'

type Props = {
  variant?: 'primary'
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { className, variant, ...restProps } = props
  const cssClasses = classNames(classes.btn, className ?? '', {
    [classes.primary]: variant === 'primary'
  })
  return <button ref={ref} type={props.type ?? 'button'} {...restProps} className={cssClasses}></button>
})