import styled from 'styled-components'
import Container from '../components/common/Container'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/common/Button'

const Section = styled.section`
  padding: calc(20px + 84px) 0 120px;

  @media (min-width: 900px) {
    padding-top: calc(20px + 96px);
  }
  text-align: center;
`

const NotFoundPage = () => {
  return (
    <Section>
      <Container>
        <h1>Trail not found</h1>
        <p>The page you are looking for has not made it onto our map yet.</p>
        <ButtonLink as={Link} to="/">Back to home</ButtonLink>
      </Container>
    </Section>
  )
}

export default NotFoundPage
