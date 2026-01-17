import styled from 'styled-components'

const Wrap = styled.div`
  display: inline-flex;
  gap: 6px;
  align-items: center;
`

const House = styled.span<{ $filled: boolean }>`
  width: 16px;
  height: 14px;
  background: ${({ $filled, theme }) => ($filled ? theme.colors.meadow : 'transparent')};
  border: 1px solid ${({ theme }) => theme.colors.evergreen};
  border-radius: 3px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -7px;
    left: -1px;
    right: -1px;
    height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 7px solid ${({ $filled, theme }) => ($filled ? theme.colors.evergreen : theme.colors.evergreen)};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 5px;
    width: 6px;
    height: 8px;
    border-radius: 2px;
    background: ${({ $filled }) => ($filled ? '#fff' : 'transparent')};
  }
`

const RatingText = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
`

type RatingHousesProps = {
  rating: number
}

const RatingHouses = ({ rating }: RatingHousesProps) => {
  return (
    <Wrap aria-label={`Rated ${rating} out of 5 houses`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <House key={index} $filled={index < rating} aria-hidden="true" />
      ))}
      <RatingText>{rating}/5</RatingText>
    </Wrap>
  )
}

export default RatingHouses
