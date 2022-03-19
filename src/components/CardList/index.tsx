import Card, { CardProps } from 'components/Card'
import { Link } from 'react-router-dom'

import * as S from './styles'

export type CardListProps = {
  items: CardProps[]
}

export default function CardList({ items }: CardListProps) {
  return (
    <S.Wrapper>
      {items.map((card, index) => (
        <S.List key={`list-${index}`}>
          <Link to={card.href}>
            <Card {...card} />
          </Link>
        </S.List>
      ))}
    </S.Wrapper>
  )
}
