export const theme = {
  colors: {
    background: '#FDF3E5',
    surface: '#FFF8EE',
    clay: '#D08A6B',
    canyon: '#E04B3A',
    evergreen: '#1F5B3A',
    river: '#2D7BBE',
    sun: '#F6B300',
    ink: '#1C2331',
    muted: '#5B6776',
    haze: '#FCE3C6',
    blush: '#F7C7A1',
    ember: '#E86A2C',
    meadow: '#6BAA4F',
    navy: '#162033',
  },
  fonts: {
    heading: "'Cormorant Garamond', serif",
    body: "'Work Sans', sans-serif",
  },
  radius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    pill: '999px',
  },
  shadow: {
    soft: '0 18px 40px rgba(31, 27, 22, 0.18)',
    lift: '0 12px 24px rgba(47, 74, 61, 0.18)',
  },
  maxWidth: '1200px',
}

export type Theme = typeof theme
