import { ReactNode, useContext } from 'react'

import { ITEM_WIDTH } from '@/components/carousel/carousel.constant'
import { useCarousel } from '@/components/carousel/carousel.model'
import { CarouselContext } from '@/components/carousel/carousel-context'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import s from './carousel.module.scss'

type CarouselProps = {
  children: ReactNode
}

export function Carousel({ children }: CarouselProps) {
  const { containerRef, handleLeftArrowClick, handleRightArrowClick } = useCarousel()

  return (
    <CarouselContext.Provider value={{ width: ITEM_WIDTH }}>
      <div className={s.root}>
        <button className={s.button} onClick={handleLeftArrowClick}>
          <FaChevronLeft className={s.arrow} onClick={handleLeftArrowClick} />
        </button>
        <div className={s.container} ref={containerRef}>
          {children}
        </div>
        <button className={s.button} onClick={handleRightArrowClick}>
          <FaChevronRight className={s.arrow} />
        </button>
      </div>
    </CarouselContext.Provider>
  )
}

function Page({ children }: CarouselProps) {
  const { width } = useContext(CarouselContext)

  return (
    <div className={s.page} style={{ maxWidth: `${width}%`, minWidth: `${width}%` }}>
      {children}
    </div>
  )
}

Carousel.Page = Page
