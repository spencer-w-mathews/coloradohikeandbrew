import { motion } from 'framer-motion'
import styled from 'styled-components'
import Container from '../components/common/Container'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import { trailSpots } from '../data/content'

const Section = styled.section`
  padding: 90px 0;
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
  border: 1px solid rgba(154, 91, 60, 0.12);
`

const TrailsSection = () => {
  return (
    <Section id="trails">
      <Container>
        <Eyebrow>Trails</Eyebrow>
        <Title>Hike notes from the high country</Title>
        <Subtitle>
          We chase misty mornings, alpine lakes, and the softest trailside light. These are the routes inspiring our next
          videos.
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
          {trailSpots.map((spot) => (
            <Card
              key={spot.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <h3>{spot.title}</h3>
              <p>{spot.detail}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default TrailsSection
