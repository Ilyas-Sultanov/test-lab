import { LogoIcon } from '@/components/ui/Icons'
import classes from './Logo.module.scss'

export function Logo() {
  return (
    <div className={classes.logo}>
      <LogoIcon />
      <span>testLab</span>
  </div>
  )
} 
