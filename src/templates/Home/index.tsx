import { Container } from 'components/Container'
import CardList from 'components/CardList'
import { Grid } from 'components/Grid'
import Hero from 'components/Hero'

import cardItemsMock from 'components/Card/mock'

export default function HomeTemplate() {
  return (
    <Container>
      <Grid>
        <Hero />
        <CardList items={cardItemsMock} />
      </Grid>
    </Container>
  )
}
