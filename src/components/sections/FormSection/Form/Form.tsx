import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { isValidNumber } from 'libphonenumber-js'
import { TextField } from '@/components/ui/TextField/TextField'
import { Checkbox } from '@/components/ui/Checkbox/Checkbox'
import { Button } from '@/components/ui/Button/Button'
import { formApi } from '@/api/formApi'
import classes from './Form.module.scss'
import { getErrorMessage } from '@/helpers/getErrorMessage'
import { useEffect } from 'react'

const validationSchema = z.object({
  name: z.string().min(2, 'Минимальная длина имени - 2 символа').max(50, 'Максимальная длина имени - 50 символов'),
  tel: z.string().refine((value) => isValidNumber(value, 'RU'), 'Номер телефона не валиден'),
  isAgree: z.boolean(),
})

export type FormFields = z.infer<typeof validationSchema>

export function Form() {
  const [ submitForm, { isSuccess, isLoading, error } ] = formApi.useSubmitFormMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm<FormFields>({
    resolver: zodResolver(validationSchema)
  })

  async function onSubmit(data: FormFields) {
    await submitForm(data).unwrap()
  }

  useEffect(() => {
    if (isSuccess) {
      reset()
    }
  }, [isSuccess, reset])
  
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        className={classes.textField}
        {...register('name')}
        label='Имя'
        status={errors.name ? 'error' : isSubmitted ? 'success' : undefined}
        helperText={errors.name?.message ?? ''}
      />
      <TextField
        className={classes.textField}
        {...register('tel')}
        label='Телефон'  type='tel'
        status={errors.tel ? 'error' : isSubmitted ? 'success' : undefined}
        helperText={errors.tel?.message ?? ''}
      />
      <Checkbox label='Согласен, отказываюсь' {...register('isAgree')} className={classes.checkbox} />
      <Button type='submit' variant='primary' className={classes.btn} disabled={isLoading}>{isLoading ? 'Отправка': 'Отправить'}</Button>
      {error ? <p className={classes.error}>{getErrorMessage(error)}</p> : null}
    </form>
  )
}
