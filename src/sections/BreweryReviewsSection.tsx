import styled from 'styled-components'
import Container from '../components/common/Container'
import RatingHouses from '../components/common/RatingHouses'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import { breweryReviews } from '../data/content'

const Section = styled.section`
  padding: 90px 0;
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

const BreweryReviewsSection = () => {
  return (
    <Section aria-labelledby="brewery-reviews-title">
      <Container>
        <Eyebrow>Breweries</Eyebrow>
        <Title id="brewery-reviews-title">Brewery reviews (5 houses max)</Title>
        <Subtitle>Our taproom vibes scorecards, rated in full houses for comfort, atmosphere, and hospitality.</Subtitle>
        <Grid>
          {breweryReviews.map((brewery) => (
            <Card key={brewery.name}>
              <h3>{brewery.name}</h3>
              <Meta>{brewery.location}</Meta>
              <p>{brewery.highlight}</p>
              <RatingHouses rating={brewery.rating} />
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default BreweryReviewsSection
