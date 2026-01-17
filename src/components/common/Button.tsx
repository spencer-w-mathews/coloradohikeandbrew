import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

const sharedStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.evergreen};
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: ${({ theme }) => theme.shadow.lift};
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 28px rgba(154, 91, 60, 0.28);
  }
`

export const ButtonLink = styled(motion.a)`
  ${sharedStyles}
`

export const Button = styled(motion.button)`
  ${sharedStyles}
`

export default ButtonLink
