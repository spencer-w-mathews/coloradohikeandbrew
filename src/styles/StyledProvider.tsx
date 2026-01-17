import { ThemeProvider } from 'styled-components'
import type { ReactNode } from 'react'
import GlobalStyle from './GlobalStyle'
import { theme } from './theme'

type StyledProviderProps = {
  children: ReactNode
}

const StyledProvider = ({ children }: StyledProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default StyledProvider
