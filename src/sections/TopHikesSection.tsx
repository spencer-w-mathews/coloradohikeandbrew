import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../components/common/Container'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import { favoriteHikeSlugs, hikes } from '../data/content'

const Section = styled.section`
  padding: 90px 0;
  background: ${({ theme }) => theme.colors.surface};
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

const HikeLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.canyon};

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.sun};
    outline-offset: 4px;
    border-radius: 6px;
  }
`

const TopHikesSection = () => {
  const favoriteHikes = favoriteHikeSlugs
    .map((slug) => hikes.find((hike) => hike.slug === slug))
    .filter(Boolean)

  return (
    <Section aria-labelledby="top-hikes-title">
      <Container>
        <Eyebrow>Top Hikes</Eyebrow>
        <Title id="top-hikes-title">Three favorite hikes</Title>
        <Subtitle>The trails we keep revisiting for the views, vibes, and post-hike pours.</Subtitle>
        <Grid>
          {favoriteHikes.map((hike) => (
            <Card key={hike!.slug}>
              <h3>{hike!.title}</h3>
              <Meta>
                <span>{hike!.location}</span>
                <span>{hike!.distance}</span>
              </Meta>
              <p>{hike!.summary}</p>
              <HikeLink to={`/hikes/${hike!.slug}`}>View hike details</HikeLink>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default TopHikesSection
