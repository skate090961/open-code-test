import { useRef } from 'react'

export function useCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleLeftArrowClick = () => {
    if (containerRef.current) {
      const box = containerRef.current
      const width = box.clientWidth

      box.scrollLeft = box.scrollLeft - width
    }
  }

  const handleRightArrowClick = () => {
    if (containerRef.current) {
      const box = containerRef.current
      const width = box.clientWidth

      box.scrollLeft = box.scrollLeft + width
    }
  }

  return { containerRef, handleLeftArrowClick, handleRightArrowClick }
}
