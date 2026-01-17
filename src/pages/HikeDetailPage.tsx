import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../components/common/Container'
import RatingBeers from '../components/common/RatingBeers'
import { hikes } from '../data/content'

const Section = styled.section`
  padding: calc(20px + 84px) 0 110px;

  @media (min-width: 900px) {
    padding-top: calc(20px + 96px);
  }
`

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.canyon};
  font-weight: 600;
  margin-bottom: 24px;
`

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 24px;
`

const BeerGrid = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 32px;
`

const BeerCard = styled.div`
  padding: 18px 20px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid rgba(179, 88, 58, 0.16);
  box-shadow: ${({ theme }) => theme.shadow.soft};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`

const BeerInfo = styled.div`
  display: grid;
  gap: 4px;
`

const HikeDetailPage = () => {
  const { slug } = useParams()
  const hike = hikes.find((item) => item.slug === slug)

  if (!hike) {
    return (
      <Section>
        <Container>
          <h2>Trail not found</h2>
          <p>We have not logged that adventure yet. Check out the full hike list.</p>
          <BackLink to="/hikes">Back to hikes</BackLink>
        </Container>
      </Section>
    )
  }

  return (
    <Section>
      <Container>
        <BackLink to="/hikes">← Back to hikes</BackLink>
        <h1>{hike.title}</h1>
        <Meta>
          <span>{hike.location}</span>
          <span>{hike.distance}</span>
          <span>{hike.elevation}</span>
        </Meta>
        <p>{hike.summary}</p>
        <h2>Beer pairings</h2>
        <p>Minimum two beers per hike, rated from one to five full beers.</p>
        <BeerGrid>
          {hike.beers.map((beer) => (
            <BeerCard key={beer.name}>
              <BeerInfo>
                <strong>{beer.name}</strong>
                <span>{beer.brewery}</span>
              </BeerInfo>
              <RatingBeers rating={beer.rating} />
            </BeerCard>
          ))}
        </BeerGrid>
      </Container>
    </Section>
  )
}

export default HikeDetailPage
