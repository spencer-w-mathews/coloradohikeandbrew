import styled from 'styled-components'
import Container from '../components/common/Container'
import { Eyebrow, Subtitle, Title } from '../components/common/SectionHeading'
import { ButtonLink } from '../components/common/Button'
import { gearItems } from '../data/content'

const Section = styled.section`
  padding: calc(20px + 84px) 0 110px;

  @media (min-width: 900px) {
    padding-top: calc(20px + 96px);
  }
`

const Intro = styled.div`
  display: grid;
  gap: 14px;
`

const Disclosure = styled.p`
  margin: 12px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
  max-width: 720px;
`

const Grid = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`

const Card = styled.article`
  padding: 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid rgba(179, 88, 58, 0.16);
  box-shadow: ${({ theme }) => theme.shadow.soft};
  display: grid;
  gap: 16px;
`

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(224, 75, 58, 0.12);
  color: ${({ theme }) => theme.colors.canyon};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.ink};
`

const CardCopy = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
`

const Highlight = styled.div`
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: rgba(247, 199, 161, 0.22);
  color: ${({ theme }) => theme.colors.navy};
  font-weight: 600;
`

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`

const GearPage = () => {
  return (
    <Section>
      <Container>
        <Intro>
          <Eyebrow>Gear</Eyebrow>
          <Title>Our trail-tested kit</Title>
          <Subtitle>Affiliate links to the pieces we actually bring along for hikes, sunrise shoots, and brew crawls.</Subtitle>
          <Disclosure>
            We may earn a small commission from these links at no extra cost to you. We only list items we use or have
            tested on the trail.
          </Disclosure>
        </Intro>
        <Grid>
          {gearItems.map((item) => (
            <Card key={item.name}>
              <Tag>{item.category}</Tag>
              <div>
                <CardTitle>{item.name}</CardTitle>
                <CardCopy>{item.description}</CardCopy>
              </div>
              <Highlight>{item.highlight}</Highlight>
              <CardFooter>
                <span>Affiliate partner</span>
                <ButtonLink href={item.link} target="_blank" rel="noreferrer">
                  Shop gear
                </ButtonLink>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default GearPage
