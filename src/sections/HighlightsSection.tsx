import { motion } from 'framer-motion'
import styled from 'styled-components'
import Container from '../components/common/Container'
import { highlights } from '../data/content'

const Section = styled.section`
  padding: 80px 0;
`

const Grid = styled(motion.div)`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 22px;
  border-left: 4px solid ${({ theme }) => theme.colors.ember};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: ${({ theme }) => theme.radius.md};
    background: linear-gradient(120deg, rgba(242, 196, 109, 0.2), transparent 50%);
    pointer-events: none;
  }
`

const HighlightsSection = () => {
  return (
    <Section>
      <Container>
        <Grid
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item) => (
            <Card
              key={item.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default HighlightsSection
