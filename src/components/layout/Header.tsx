import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Container from '../common/Container'

const Wrapper = styled(motion.header)`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(245, 239, 232, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(154, 91, 60, 0.12);
`

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0px;
  gap: 16px;
`

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

const LogoMark = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(22, 32, 51, 0.2);
`

const Nav = styled.nav`
  display: flex;
  gap: 18px;
  align-items: center;
  flex-wrap: wrap;
`

const NavItem = styled(NavLink)`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.muted};
  transition: color 0.2s ease;

  &.active {
    color: ${({ theme }) => theme.colors.canyon};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.canyon};
  }
`

const Header = () => {
  return (
    <Wrapper
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Inner>
        <Logo to="/">
          <LogoMark src={logo} alt="Colorado Hike + Brew logo" />
          Colorado Hike + Brew
        </Logo>
        <Nav>
          <NavItem to="/hikes" className={({ isActive }) => (isActive ? 'active' : '')}>
            Hikes
          </NavItem>
          <NavItem to="/brews" className={({ isActive }) => (isActive ? 'active' : '')}>
            Brews
          </NavItem>
          <NavItem to="/videos" className={({ isActive }) => (isActive ? 'active' : '')}>
            Videos
          </NavItem>
          <NavItem to="/journal" className={({ isActive }) => (isActive ? 'active' : '')}>
            Journal
          </NavItem>
          <NavItem to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Connect
          </NavItem>
        </Nav>
      </Inner>
    </Wrapper>
  )
}

export default Header
