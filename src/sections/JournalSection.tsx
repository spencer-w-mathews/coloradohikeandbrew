import { motion } from 'framer-motion'
import styled from 'styled-components'
import Container from '../components/common/Container'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import { journalEntries } from '../data/content'

const Section = styled.section`
  padding: calc(0px + 84px) 0 20px;
  background: ${({ theme }) => theme.colors.surface};

  @media (min-width: 900px) {
    padding-top: calc(20px + 96px);
  }
`

const Grid = styled(motion.div)`
  margin-top: 40px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`

const Card = styled(motion.article)`
  padding: 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid rgba(154, 91, 60, 0.16);
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadow.soft};
`

const Date = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.16em;
`

const JournalSection = () => {
  return (
    <Section id="journal">
      <Container>
        <Eyebrow>Journal</Eyebrow>
        <Title>Dispatches from the trail</Title>
        <Subtitle>
          Long-form recaps, gear checklists, and the moments that made us pause and breathe a little deeper.
        </Subtitle>
        <Grid
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {journalEntries.map((entry) => (
            <Card
              key={entry.title}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <Date>{entry.date}</Date>
              <h3>{entry.title}</h3>
              <p>{entry.excerpt}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default JournalSection
