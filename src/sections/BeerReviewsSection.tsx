import styled from 'styled-components'
import Container from '../components/common/Container'
import RatingBeers from '../components/common/RatingBeers'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import { beerReviews } from '../data/content'

const Section = styled.section`
  padding: 20px 0;
  background: ${({ theme }) => theme.colors.haze};
`

const Grid = styled.div`
  margin-top: 36px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`

const Card = styled.div`
  padding: 22px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid rgba(179, 88, 58, 0.16);
  box-shadow: ${({ theme }) => theme.shadow.soft};
  display: grid;
  gap: 12px;
`

const Meta = styled.div`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
`

const BeerReviewsSection = () => {
  return (
    <Section aria-labelledby="beer-reviews-title">
      <Container>
        <Eyebrow>Brews</Eyebrow>
        <Title id="beer-reviews-title">Beer reviews (5 beers max)</Title>
        <Subtitle>Our favorite pours, rated in full beers for flavor, finish, and trail-pairing factor.</Subtitle>
        <Grid>
          {beerReviews.map((beer) => (
            <Card key={beer.name}>
              <h3>{beer.name}</h3>
              <Meta>
                {beer.brewery} · {beer.style}
              </Meta>
              <RatingBeers rating={beer.rating} />
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default BeerReviewsSection
