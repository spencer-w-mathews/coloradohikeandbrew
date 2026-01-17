import styled from 'styled-components'
import Container from '../components/common/Container'
import RatingBeers from '../components/common/RatingBeers'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import { favoriteBeers } from '../data/content'

const Section = styled.section`
  padding: 90px 0;
  background: ${({ theme }) => theme.colors.haze};
`

const Grid = styled.div`
  margin-top: 36px;
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`

const Card = styled.div`
  padding: 22px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: #fff;
  border: 1px solid rgba(179, 88, 58, 0.16);
  box-shadow: ${({ theme }) => theme.shadow.soft};
  display: grid;
  gap: 12px;
`

const Meta = styled.div`
  display: grid;
  gap: 6px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
`

const TopBrewsSection = () => {
  return (
    <Section aria-labelledby="top-brews-title">
      <Container>
        <Eyebrow>Top Brews</Eyebrow>
        <Title id="top-brews-title">Three favorite beers</Title>
        <Subtitle>The pours we recommend when you want a post-trail reward.</Subtitle>
        <Grid>
          {favoriteBeers.map((beer) => (
            <Card key={beer.name}>
              <h3>{beer.name}</h3>
              <Meta>
                <span>{beer.brewery}</span>
                <span>{beer.style}</span>
              </Meta>
              <RatingBeers rating={beer.rating} />
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default TopBrewsSection
