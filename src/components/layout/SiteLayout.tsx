import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import ScrollToTop from '../common/ScrollToTop'
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
  footer {
    position: relative;
    z-index: 1;
  }
`

const SiteLayout = () => {
  return (
    <Page>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </Page>
  )
}

export default SiteLayout
