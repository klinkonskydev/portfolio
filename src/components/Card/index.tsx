import { AnchorHTMLAttributes } from 'react'
import * as S from './styles'

export type CardProps = {
  title: string
  description: string
  href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default function Card({ title, description }: CardProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}
