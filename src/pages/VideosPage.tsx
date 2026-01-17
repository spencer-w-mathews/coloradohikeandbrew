import styled from 'styled-components'
import Container from '../components/common/Container'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import VideoSection from '../sections/VideoSection'
import NewsletterSection from '../sections/NewsletterSection'

const Hero = styled.section`
  padding: 20px 0 0;
`

const VideosPage = () => {
  return (
    <>
      <Hero>
        <Container>
          <Eyebrow>Videos</Eyebrow>
          <Title>Trail-to-tap video journal</Title>
          <Subtitle>Hikes, breweries, and our cozy recap chats captured in weekly episodes.</Subtitle>
        </Container>
      </Hero>
      <VideoSection />
      <NewsletterSection />
    </>
  )
}

export default VideosPage
