import { useEffect, useRef } from 'react'
import * as S from './styles'

const Canvas = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  const mouseMove = (e: MouseEvent) => {
    const x = e.pageX
    const y = e.pageY

    if (cursorRef.current) {
      cursorRef.current.style.top = y + 'px'
      cursorRef.current.style.left = x + 'px'
      cursorRef.current.style.display = 'block'
    }
  }

  const mouseOut = () => {
    if (cursorRef.current) {
      cursorRef.current.style.display = 'none'
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseout', mouseOut)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseout', mouseOut)
    }
  }, [])

  return <S.Cursor ref={cursorRef} />
}

export default Canvas
