import { Children, ReactNode, cloneElement, useEffect, useState } from 'react'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import s from './carousel.module.scss'

type CarouselProps = {
  children: ReactNode
}
const PAGE_WIDTH = 140

export function Carousel({ children }: CarouselProps) {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setPages(
      Children.map(children, (child: any) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            maxWidth: `${PAGE_WIDTH}px`,
            minWidth: `${PAGE_WIDTH}px`,
          },
        })
      })
    )
  }, [])
  const handleLeftArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset + PAGE_WIDTH

      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset(currentOffset => {
      const newOffset = currentOffset - PAGE_WIDTH
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

      return Math.max(newOffset, maxOffset)
    })
  }

  return (
    <div className={s.root}>
      <FaChevronLeft className={s.arrow} onClick={handleLeftArrowClick} />
      <div className={s.window}>
        <div className={s.items} style={{ transform: `translateX(${offset}px)` }}>
          {children}
        </div>
      </div>
      <FaChevronRight className={s.arrow} onClick={handleRightArrowClick} />
    </div>
  )
}
