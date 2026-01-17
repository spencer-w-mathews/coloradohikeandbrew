import styled from 'styled-components'
import Container from '../components/common/Container'
import { Eyebrow, Title, Subtitle } from '../components/common/SectionHeading'
import NewsletterSection from '../sections/NewsletterSection'

const Section = styled.section`
  padding: 20px 0 60px;
`

const Card = styled.div`
  margin-top: 32px;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid rgba(179, 88, 58, 0.16);
  box-shadow: ${({ theme }) => theme.shadow.soft};
  display: grid;
  gap: 12px;
`

const ContactPage = () => {
  return (
    <>
      <Section>
        <Container>
          <Eyebrow>Connect</Eyebrow>
          <Title>Let us plan an adventure together</Title>
          <Subtitle>Brand collabs, trail suggestions, and cozy brewery tips are all welcome.</Subtitle>
          <Card>
            <div>
              <strong>Email</strong>
              <p>hello@coloradohikeandbrew.com</p>
            </div>
            <div>
              <strong>YouTube</strong>
              <p>@coloradohikeandbrew</p>
            </div>
            <div>
              <strong>Instagram</strong>
              <p>@coloradohikeandbrew</p>
            </div>
          </Card>
        </Container>
      </Section>
      <NewsletterSection />
    </>
  )
}

export default ContactPage
