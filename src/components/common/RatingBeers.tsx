import styled from 'styled-components'

const Wrap = styled.div`
  display: inline-flex;
  gap: 6px;
  align-items: center;
`

const Beer = styled.span<{ $filled: boolean }>`
  width: 14px;
  height: 20px;
  border-radius: 6px 6px 4px 4px;
  border: 1px solid ${({ theme }) => theme.colors.canyon};
  background: ${({ $filled, theme }) => ($filled ? theme.colors.sun : 'transparent')};
  position: relative;
  box-shadow: ${({ $filled }) => ($filled ? '0 0 6px rgba(242, 196, 109, 0.5)' : 'none')};

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 2px;
    right: 2px;
    height: 4px;
    border-radius: 4px 4px 0 0;
    background: ${({ $filled }) => ($filled ? '#fff' : 'transparent')};
    opacity: 0.9;
  }
`

const RatingText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
`

type RatingBeersProps = {
  rating: number
}

const RatingBeers = ({ rating }: RatingBeersProps) => {
  return (
    <Wrap>
      {Array.from({ length: 5 }).map((_, index) => (
        <Beer key={index} $filled={index < rating} />
      ))}
      <RatingText>{rating}/5</RatingText>
    </Wrap>
  )
}

export default RatingBeers
