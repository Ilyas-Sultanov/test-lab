import { Accordion } from '@/components/ui/Accordion/Accordion'
import classes from './QuestionsAndAnswers.module.scss'

export function QuestionsAndAnswersSection() {
  return (
    <section className={classes.questionsAndAnswers} id='questionsAndAnswers'>
      <div className='container'>
        <h2 className={classes.title}>Вопросы и ответы</h2>
        <Accordion />
      </div>
    </section>
  )
}
