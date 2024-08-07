import { ReactNode, useEffect, useRef } from 'react'
import Slider, { Settings } from 'react-slick'
import { SliderButton } from './SliderButton'
import './Slider.scss'

type Props = {
  children: ReactNode
}

export function SimpleSlider({ children }: Props) {
  const sliderRef = useRef(null)
  const timerRef = useRef(0)

  function reziseSlickList() {
    if (!sliderRef.current) {
      return
    }
    const sliderInstanse = sliderRef.current as Slider
    const slickListEl = sliderInstanse.innerSlider?.list as HTMLDivElement
    
    function getPreparedSlidesContent() {
      const allSlidesContent = [...slickListEl.querySelectorAll('.slick-slide > div > div')] as Array<HTMLDivElement>
      allSlidesContent.forEach((item) => item.style.height = '')
      return allSlidesContent
    }

    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      const activeSlides = slickListEl.querySelectorAll('.slick-active')
      const currentBreakpoint = (sliderInstanse.state as { breakpoint: null | number }).breakpoint
      if (currentBreakpoint && currentBreakpoint < 768) {
        getPreparedSlidesContent()
        const currentSlide = activeSlides[0] as HTMLDivElement
        slickListEl.style.height = `${currentSlide.offsetHeight}px`
      } else {
        const allSlidesContent = getPreparedSlidesContent()
        const maxHeight = Math.max(...allSlidesContent.map((slide) => Number(getComputedStyle(slide).height.replace('px', ''))))
        allSlidesContent.forEach((item: HTMLDivElement) => item.style.height = `${maxHeight}px`)
        slickListEl.style.height = `${maxHeight + 20}px`
      }
    }, 100)
  }

  useEffect(() => {
    window.addEventListener('resize', reziseSlickList)
    screen.orientation.addEventListener('change', () => {
      reziseSlickList()
    })
    reziseSlickList()
    return () => {
      window.removeEventListener('resize', reziseSlickList)
      screen.orientation.removeEventListener('change', reziseSlickList)
    }
  }, [])

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
    afterChange: reziseSlickList,
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
