import { Children, ReactNode, useContext, useState } from 'react'

import { CarouselContext } from '@/components/carousel/carousel-context'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import s from './carousel.module.scss'

type CarouselProps = {
  children: ReactNode
}
const PAGE_WIDTH = 30

export function Carousel({ children }: CarouselProps) {
  const [offset, setOffset] = useState(0)
  const handleLeftArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + PAGE_WIDTH

      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH * (children ? Children.count(children) - 1 : 0))

      return Math.max(newOffset, maxOffset)
    })
  }

  return (
    <CarouselContext.Provider value={{ width: PAGE_WIDTH }}>
      <div className={s.root}>
        <FaChevronLeft className={s.arrow} onClick={handleLeftArrowClick} />
        <div className={s.window}>
          <div className={s.items} style={{ transform: `translateX(${offset}%)` }}>
            {children}
          </div>
        </div>
        <FaChevronRight className={s.arrow} onClick={handleRightArrowClick} />
      </div>
    </CarouselContext.Provider>
  )
}

export function Page({ children }: CarouselProps) {
  const { width } = useContext(CarouselContext)

  return (
    <div className={s.page} style={{ maxWidth: `${width}%`, minWidth: `${width}%` }}>
      {children}
    </div>
  )
}

Carousel.Page = Page
