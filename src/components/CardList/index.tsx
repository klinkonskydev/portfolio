import Card, { CardProps } from 'components/Card'

import * as S from './styles'

export type CardListProps = {
  item: CardProps[]
}

export default function CardList({ item }: CardListProps) {
  return (
    <S.Wrapper>
      {item.map((card) => (
        <li key={card.title}>
          <Card {...card} />
        </li>
      ))}
    </S.Wrapper>
  )
}
