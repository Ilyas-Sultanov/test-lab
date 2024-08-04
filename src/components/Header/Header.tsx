
import { useState } from 'react'
import { BurgerMenuIcon } from '@/components/ui/Icons'
import { MobileNav, type LinkData } from './MobileNav/MobileNav'
import { Logo } from './Logo/Logo'
import classes from './Header.module.scss'

const linksData: Array<LinkData> = [
  { href: '#howItWorks', label: 'Как это работает' },
  { href: '#thirdBlock', label: '3-й блок' },
  { href: '#questionsAndAnswers', label: 'Вопросы и ответы' },
  { href: '#form', label: 'Форма' },
]

export function Header() {
const [isShowMobileNav, setIsShowMobileNav] = useState<boolean>(false)

  function toggleMobileNav() {
    setIsShowMobileNav((prev) => {
      return !prev
    })
  }

  return (
    <header className={classes.header}>
      <Logo />
      <nav className={classes.nav}>
        {
          linksData.map(({ href, label }) => {
            return (
              <a
                key={label}
                href={href}
                className={classes.link}
              >{label}</a>
            )
          })
        }
      </nav>
      <button
        type='button'
        className={classes.burgerBtn}
        onClick={toggleMobileNav}
      ><BurgerMenuIcon /></button>
      <MobileNav
        linksData={linksData}
        isOpen={isShowMobileNav}
        onClose={toggleMobileNav}
      />
    </header>
  )
}
