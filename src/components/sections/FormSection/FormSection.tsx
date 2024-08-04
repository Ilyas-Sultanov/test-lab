import { Form } from './Form/Form'
import classNames from 'classnames'
import classes from './FormSection.module.scss'

export function FormSection() {
  return (
    <section id='form' className={classes.formSection}>
      <div className={classNames('container', classes.container)}>
        <h2 className={classes.title}>Отправь форму</h2>
        <Form />
      </div>
    </section>
  )
}
