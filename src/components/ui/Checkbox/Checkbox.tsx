import { InputHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react'
import classes from './Checkbox.module.scss'

type Props = {
  label: string
} & DetailedHTMLProps<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>, HTMLInputElement>


export const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, ...restProps } = props
  return (
    <label className={classes.label}>
      <input type="checkbox" ref={ref} {...restProps} />
      <div className={classes.icon}></div>
      <span>{label}</span>
    </label>
  )
})
