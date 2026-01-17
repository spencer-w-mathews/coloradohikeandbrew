import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import StyledProvider from './styles/StyledProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledProvider>
      <App />
    </StyledProvider>
  </StrictMode>,
)
