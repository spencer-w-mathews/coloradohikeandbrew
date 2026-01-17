import styled from 'styled-components'
import logo from '../../assets/logo.png'
import Container from '../common/Container'

const Wrapper = styled.footer`
  background: linear-gradient(140deg, ${({ theme }) => theme.colors.evergreen}, #1f3b34);
  color: #f8f2ea;
  padding: 48px 0;
`

const Inner = styled(Container)`
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.6rem;
`

const LogoMark = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 14px;
`

const BrandRow = styled.div`
  grid-column: 1 / -1;
`

const Small = styled.p`
  margin: 0;
  color: rgba(248, 242, 234, 0.8);
`

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <BrandRow>
          <Brand>
            <LogoMark src={logo} alt="Colorado Hike + Brew logo" />
            Colorado Hike + Brew
          </Brand>
        </BrandRow>
        <div>
          <Small>High-alpine adventures, local pours, and the stories between.</Small>
        </div>
        <div>
          <Small>Now pouring: seasonal recaps, trail guides, and behind-the-scenes footage.</Small>
        </div>
        <div>
          <Small>Say hey: hello@coloradohikeandbrew.com</Small>
        </div>
      </Inner>
    </Wrapper>
  )
}

export default Footer
