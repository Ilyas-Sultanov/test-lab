import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react'
import { CheckCircle, CancelCircle } from '@/components/ui/Icons'
import classNames from 'classnames'
import classes from './TextField.module.scss'

type Props = {
  label: string
  helperText?: string
  status?: 'error' | 'success' 
} & DetailedHTMLProps<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>, HTMLInputElement>
& { type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'search' }

export const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const id = useId()
  const { label, helperText, status, placeholder = '', ...restProps } = props

  function focusInput() {
    const input = document.getElementById(id) as HTMLInputElement
    input.focus()
  }

  function getStatusIcon() {
    let icon: ReactNode = null
    if (status === 'success') {
      icon = <CheckCircle className={classes.statusIcon} />
    } else if (status === 'error') {
      icon = <CancelCircle className={classes.statusIcon} />
    }
    return icon
  }

  const textFieldCssClasses = classNames(classes.textField, {
    [classes.success]: status === 'success',
    [classes.error]: status === 'error',
  })

  const helperTextCssClasses = classNames(classes.helperText, {
    [classes.error]: status === 'error' && helperText
  })

  return (
    <div className={classes.fieldWrapper} onClick={focusInput}>
      <div className={textFieldCssClasses}>
        <input type="text" placeholder={placeholder} autoComplete='off' {...restProps} id={id} ref={ref} />
        <label className={classes.label}>{label}</label>
        { getStatusIcon() }
      </div>
      { helperText ? <p className={helperTextCssClasses}>{helperText}</p> : null}
    </div>
  )
})
