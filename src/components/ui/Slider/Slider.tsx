import { ReactNode, useEffect, useRef } from 'react'
import Slider, { Settings } from 'react-slick'
import { SliderButton } from './SliderButton'
import './Slider.scss'

type Props = {
  children: ReactNode
}

export function SimpleSlider({ children }: Props) {
  const sliderRef = useRef(null)

  function reziseSlickList() {
    if (sliderRef.current) {
      const sliderInstanse = sliderRef.current as Slider
      const slickListEl = sliderInstanse.innerSlider?.list as HTMLDivElement
      const currentSlide = slickListEl.querySelector('.slick-current') as HTMLDivElement
      if (currentSlide) {
        slickListEl.style.height = `${currentSlide.offsetHeight}px`
      }
    }
  }

  useEffect(() => {
    if (!sliderRef.current) {
      return
    }
    window.addEventListener('resize', reziseSlickList)
    reziseSlickList()
    return () => {
      window.removeEventListener('resize', reziseSlickList)
    }
  }, [])

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SliderButton type='prev' />,
    nextArrow: <SliderButton type='next' />,
    customPaging: function(i) {
      return (
        <button key={i} className='slider-dot'></button>
      )
    },
    dotsClass: 'slick-dots slick-thumb',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          afterChange: reziseSlickList,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className='slider'ref={sliderRef} >
      {children}
    </Slider>
  )
}
