import { Grid } from 'components/Grid'
import { Container } from 'components/Container'
import Hero from 'components/Hero'
import CardList from 'components/CardList'

export default function HomeTemplate() {
  return (
    <Container>
      <Grid>
        <Hero />
        <CardList item={[]} />
      </Grid>
    </Container>
  )
}
