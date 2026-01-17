import { motion } from 'framer-motion'
import styled from 'styled-components'
import ButtonLink from '../components/common/Button'
import Container from '../components/common/Container'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import { videoFeatures } from '../data/content'

const Section = styled.section`
  padding: 90px 0;
`

const Layout = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`

const Player = styled(motion.div)`
  background: linear-gradient(140deg, rgba(45, 90, 75, 0.92), rgba(44, 122, 123, 0.85));
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 32px;
  color: #f8f2ea;
  min-height: 280px;
  position: relative;
  overflow: hidden;
`

const Orb = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(224, 180, 88, 0.35);
  top: -40px;
  right: -30px;
`

const VideoList = styled(motion.div)`
  display: grid;
  gap: 18px;
`

const VideoCard = styled(motion.div)`
  padding: 18px 20px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  border: 1px solid rgba(154, 91, 60, 0.12);
`

const Meta = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
`

const VideoSection = () => {
  return (
    <Section id="videos">
      <Container>
        <Eyebrow>Videos</Eyebrow>
        <Title>Trail-to-tap episodes</Title>
        <Subtitle>
          We blend cinematic hikes, brewery stories, and cozy recap conversations. New videos land every week.
        </Subtitle>
        <Layout>
          <Player
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Orb />
            <h3>Latest feature</h3>
            <p>Tenmile Range sunrise hike + post-trek amber ale tasting.</p>
            <ButtonLink href="https://www.youtube.com" target="_blank" rel="noreferrer" whileTap={{ scale: 0.98 }}>
              Watch on YouTube
            </ButtonLink>
          </Player>
          <VideoList
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {videoFeatures.map((video) => (
              <VideoCard
                key={video.title}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
              >
                <h4>{video.title}</h4>
                <Meta>
                  <span>{video.length}</span>
                  <span>{video.vibe}</span>
                </Meta>
              </VideoCard>
            ))}
          </VideoList>
        </Layout>
      </Container>
    </Section>
  )
}

export default VideoSection
