import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Button } from '../components/common/Button'
import Container from '../components/common/Container'

const Section = styled.section`
  padding: 80px 0 110px;
`

const Card = styled(motion.div)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.blush}, #f6d6bf);
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 40px;
  display: grid;
  gap: 24px;
  box-shadow: ${({ theme }) => theme.shadow.lift};
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const Input = styled.input`
  flex: 1 1 220px;
  padding: 14px 16px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid rgba(154, 91, 60, 0.3);
  background: #fff;
`

const Helper = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
`

const NewsletterSection = () => {
  return (
    <Section id="contact">
      <Container>
        <Card
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2>Stay in the loop</h2>
            <Helper>
              Get fresh trail recaps, brewery roundups, and new episode drops in your inbox. We keep it cozy and occasional.
            </Helper>
          </div>
          <Form>
            <label className="visually-hidden" htmlFor="newsletter-name">
              Name
            </label>
            <Input id="newsletter-name" type="text" name="name" placeholder="Your name" autoComplete="name" />
            <label className="visually-hidden" htmlFor="newsletter-email">
              Email
            </label>
            <Input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="email"
            />
            <Button type="submit" whileTap={{ scale: 0.98 }}>
              Join the trail list
            </Button>
          </Form>
        </Card>
      </Container>
    </Section>
  )
}

export default NewsletterSection
