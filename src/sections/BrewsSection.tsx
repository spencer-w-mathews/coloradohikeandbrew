import { motion } from 'framer-motion'
import styled from 'styled-components'
import Container from '../components/common/Container'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import { brewSpots } from '../data/content'

const Section = styled.section`
  padding: 90px 0;
  background: linear-gradient(120deg, ${({ theme }) => theme.colors.haze}, #f7e9dc);
`

const Grid = styled(motion.div)`
  margin-top: 40px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`

const Card = styled(motion.article)`
  background: ${({ theme }) => theme.colors.surface};
  padding: 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  border: 1px solid rgba(62, 107, 107, 0.18);
`

const BrewTag = styled.span`
  display: inline-flex;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(47, 74, 61, 0.12);
  color: ${({ theme }) => theme.colors.evergreen};
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const BrewsSection = () => {
  return (
    <Section id="brews">
      <Container>
        <Eyebrow>Brews</Eyebrow>
        <Title>Local pours with personality</Title>
        <Subtitle>
          Colorado breweries keep surprising us. Here are the flavor stories we are pairing with trail miles this season.
        </Subtitle>
        <Grid
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {brewSpots.map((spot, index) => (
            <Card
              key={spot.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <BrewTag>Pour {index + 1}</BrewTag>
              <h3>{spot.title}</h3>
              <p>{spot.detail}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default BrewsSection
