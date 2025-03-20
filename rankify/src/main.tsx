import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './client/index.css'
import App from './client/App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
