import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Flex, MerelyProvider } from "@merely-ui/react"
import '../styles/globals.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MerelyProvider disableGlobalStyles={true}>
    <App />
    </MerelyProvider>
  </StrictMode>,
)
