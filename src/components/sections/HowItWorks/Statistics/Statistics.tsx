import imgUrl from '@/assets/images/jpeg/statistics.jpeg'
import classes from './Statistics.module.scss'

export function Statistics() {
  return (
    <div className={classes.statistics}>
      <div className={classes.textBlock}>
        <h4 className={classes.title} id='thirdBlock'>Круто, ты дошел до третьего блока</h4>
        <p className={classes.text}>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</p>
        <p className={classes.text}>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
      </div>
      <div className={classes.imgBlock}>
        <img src={imgUrl} alt="statistics img" />
      </div>
    </div>
  )
}
