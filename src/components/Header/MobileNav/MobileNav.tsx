import { Logo } from '../Logo/Logo'
import { CloseIcon, ChevronRightIcon } from '@/components/ui/Icons'
import classNames from 'classnames'
import classes from './MobileNav.module.scss'

export type LinkData = { href: string, label: string }

type Props = {
  linksData: Array<LinkData>
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ linksData, isOpen, onClose }: Props) {

  const menuCssClasses = classNames(classes.menu, {
    [classes.active]: isOpen,
  })

  return (
    <div className={menuCssClasses}>
      <div className={classes.header}>
        <Logo />
        <button
          className={classes.closeBtn}
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>
      <nav className={classes.mobileNav}>
        {
          linksData.map(({ href, label }) => {
            return (
              <a
                key={label}
                href={href}
                className={classes.link}
                onClick={onClose}
              >
                {label}
                <ChevronRightIcon />
              </a>
            )
          })
        }
      </nav>
    </div>
  )
}
