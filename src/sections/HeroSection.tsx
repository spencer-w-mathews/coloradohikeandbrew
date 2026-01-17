import { motion } from 'framer-motion'
import styled from 'styled-components'
import ButtonLink from '../components/common/Button'
import logo from '../assets/logo.png'
import Container from '../components/common/Container'
import { Link } from 'react-router-dom'

const Section = styled.section`
  position: relative;
  padding: calc(30px + 84px) 0 90px;
  overflow: hidden;

  @media (min-width: 900px) {
    padding-top: calc(30px + 96px);
  }
`

const Glow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 15% 20%, rgba(246, 179, 0, 0.4), transparent 55%),
    radial-gradient(circle at 85% 25%, rgba(45, 123, 190, 0.32), transparent 55%),
    radial-gradient(circle at 60% 90%, rgba(224, 75, 58, 0.24), transparent 55%),
    linear-gradient(120deg, #fff3e6 0%, #f7e2d2 100%);
  z-index: 0;
`

const MountainLine = styled(motion.svg)`
  position: absolute;
  width: 1400px;
  max-width: 180%;
  height: auto;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
  z-index: 0;
  opacity: 0.4;
  pointer-events: none;
`

const LogoBadge = styled(motion.img)`
  width: 102px;
  height: 102px;
  border-radius: 18px;
  box-shadow: 0 16px 28px rgba(22, 32, 51, 0.22);
`

const Inner = styled(Container)`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 24px;
  justify-items: center;
  text-align: center;
`

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.8rem, 5vw, 4.8rem);
  margin: 16px 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const Lead = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.muted};
  max-width: 620px;
`

const TrailStamp = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(47, 90, 75, 0.12);
  color: ${({ theme }) => theme.colors.evergreen};
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.85rem;
`


const HeroSection = () => {
  return (
    <Section id="top">
      <Glow />
      <MountainLine
        viewBox="0 0 1200 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <motion.path
          d="M20 230 L180 60 L320 170 L480 30 L620 150 L720 60 L860 170 L1040 40 L1180 150"
          stroke="#2D5A4B"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.path
          d="M30 240 L210 120 L360 215 L460 110 L560 220 L700 105 L820 215 L1000 120 L1170 225"
          stroke="#B3583A"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          d="M420 150 L480 30 L540 150"
          stroke="#2D5A4B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          d="M710 160 L760 50 L820 160"
          stroke="#B3583A"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </MountainLine>
      <Inner>
        <LogoBadge
          src={logo}
          alt="Colorado Hike & Brew logo"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Colorado Hike & Brew
        </Title>
        <Lead
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A couple-led journal of high-altitude trails, cozy taprooms, and the stories we pick up along the way. Follow
          our adventure logs, video recaps, and trail-to-tap pairings.
        </Lead>
        <TrailStamp
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Est. 2026 · Colorado
        </TrailStamp>

          <ButtonLink  as={Link} to="/videos" whileTap={{ scale: 0.98 }} style={{ borderRadius: 5}}>
            Watch the latest trek
          </ButtonLink>
      </Inner>
    </Section>
  )
}

export default HeroSection
