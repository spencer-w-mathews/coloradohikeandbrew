import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../components/common/Container'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import { hikes } from '../data/content'

const Section = styled.section`
  padding: 20px 0 110px;
`

const Grid = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`

const Card = styled(Link)`
  padding: 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid rgba(179, 88, 58, 0.16);
  box-shadow: ${({ theme }) => theme.shadow.soft};
  display: grid;
  gap: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(31, 27, 22, 0.16);
  }
`

const Meta = styled.div`
  display: flex;
  gap: 16px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
`

const HikesPage = () => {
  return (
    <Section>
      <Container>
        <Eyebrow>Hikes</Eyebrow>
        <Title>Trail guides + brewery pairings</Title>
        <Subtitle>Each hike includes at least two beers we sampled post-trek, rated from one to five full beers.</Subtitle>
        <Grid>
          {hikes.map((hike) => (
            <Card key={hike.slug} to={`/hikes/${hike.slug}`}>
              <div>
                <h3>{hike.title}</h3>
                <p>{hike.summary}</p>
              </div>
              <Meta>
                <span>{hike.location}</span>
                <span>{hike.distance}</span>
              </Meta>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default HikesPage
