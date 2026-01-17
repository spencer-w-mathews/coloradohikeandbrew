import styled from 'styled-components'

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: ${({ theme }) => theme.colors.canyon};
  font-weight: 600;
`

export const Title = styled.h2`
  margin: 12px 0 12px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
`

export const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  max-width: 640px;
  font-size: 1.05rem;
`
