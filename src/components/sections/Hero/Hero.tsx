import classNames from 'classnames'
import { Header } from '@/components/Header/Header'
import { Button } from '@/components/ui/Button/Button'
import imgUrl from '@/assets/images/jpeg/hero.jpeg'
import classes from './Hero.module.scss'

export function HeroSection() {
  const containerCssClasses = classNames('container', classes.container)

  return (
    <div className={classes.hero}>
      <img className={classes.img} src={imgUrl} alt="hero image" />
      <div className={classes.gradient}></div>
      <section className={classes.content}>
        <div className={containerCssClasses}>
          <Header />
          <div className={classes.contentInner}>
            <h1>Говорят, никогда не поздно сменить профессию</h1>
            <h4>Сделай круто тестовое задание и у тебя получится</h4>
            <Button className={classes.btn}>Проще простого!</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
