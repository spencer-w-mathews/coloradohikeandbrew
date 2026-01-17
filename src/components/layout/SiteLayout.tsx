import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

const Page = styled.div`
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    filter: blur(0px);
    opacity: 0.6;
    z-index: 0;
  }

  &::before {
    background: radial-gradient(circle, ${({ theme }) => theme.colors.sun} 0%, transparent 65%);
    top: -160px;
    right: -120px;
  }

  &::after {
    background: radial-gradient(circle, ${({ theme }) => theme.colors.meadow} 0%, transparent 70%);
    bottom: -180px;
    left: -120px;
  }

  main,
  footer,
  header {
    position: relative;
    z-index: 1;
  }
`

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 16px;
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.sun};
  color: ${({ theme }) => theme.colors.ink};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-weight: 600;
  z-index: 20;
  transition: top 0.2s ease;

  &:focus {
    top: 16px;
  }
`

const SiteLayout = () => {
  return (
    <Page>
      <SkipLink href="#main-content">Skip to content</SkipLink>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </Page>
  )
}

export default SiteLayout
