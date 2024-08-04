import { CSSProperties } from 'react'
import { SliderBtnIconIcon } from '../Icons'

type Props = {
  className?: string
  style?: CSSProperties
  onClick?: () => void
  type: 'prev' | 'next'
}

export function SliderButton({ className = '', style = {}, onClick, type }: Props) {
  return (
    <button className={className} style={{ ...style }} onClick={onClick}>
      <SliderBtnIconIcon style={ type === 'next' ? { transform: 'rotate(180deg)' } : {} }/>
    </button>
  )
}
