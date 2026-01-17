import styled from 'styled-components'
import Container from '../components/common/Container'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import JournalSection from '../sections/JournalSection'
import NewsletterSection from '../sections/NewsletterSection'

const Hero = styled.section`
  padding: 20px 0 0;
`

const JournalPage = () => {
  return (
    <>
      <Hero>
        <Container>
          <Eyebrow>Journal</Eyebrow>
          <Title>Stories from the trailhead</Title>
          <Subtitle>Long-form recaps, gear notes, and small-town discoveries.</Subtitle>
        </Container>
      </Hero>
      <JournalSection />
      <NewsletterSection />
    </>
  )
}

export default JournalPage
