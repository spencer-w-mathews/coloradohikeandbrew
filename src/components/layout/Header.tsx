import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Container from '../common/Container'

const Wrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(245, 239, 232, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(154, 91, 60, 0.12);
  border-radius: 0 0 15px 15px;
`

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 10px;
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

  @media (max-width: 900px) {
    display: none;
  }
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

const MobileToggle = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid rgba(22, 32, 51, 0.15);
  background: ${({ theme }) => theme.colors.surface};
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 900px) {
    display: inline-flex;
  }
`

const ToggleIcon = styled.span<{ $open: boolean }>`
  position: relative;
  width: 20px;
  height: 2px;
  background: ${({ $open, theme }) => ($open ? 'transparent' : theme.colors.ink)};
  transition: background 0.2s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 20px;
    height: 2px;
    background: ${({ theme }) => theme.colors.ink};
    transition: transform 0.2s ease;
  }

  &::before {
    transform: ${({ $open }) => ($open ? 'translateY(0) rotate(45deg)' : 'translateY(-6px)')};
  }

  &::after {
    transform: ${({ $open }) => ($open ? 'translateY(0) rotate(-45deg)' : 'translateY(6px)')};
  }
`

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  gap: 16px;
  padding: 20px 24px 28px;
  border-top: 1px solid rgba(154, 91, 60, 0.12);
  background: rgba(245, 243, 235, 0.96);
  backdrop-filter: blur(12px);

  @media (max-width: 900px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Inner>
        <Logo to="/">
          <LogoMark src={logo} alt="Colorado Hike & Brew logo" />
          Colorado Hike & Brew
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
        <MobileToggle
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <ToggleIcon $open={isOpen} />
        </MobileToggle>
      </Inner>
      <MobileMenu $open={isOpen}>
        <NavItem to="/hikes" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
          Hikes
        </NavItem>
        <NavItem to="/brews" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
          Brews
        </NavItem>
        <NavItem to="/videos" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
          Videos
        </NavItem>
        <NavItem to="/journal" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
          Journal
        </NavItem>
        <NavItem to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
          Connect
        </NavItem>
      </MobileMenu>
    </Wrapper>
  )
}

export default Header
