import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StyleLearn from './StyleLearn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <ConditionalRendering /> */}

    <StyleLearn />
  </StrictMode>,
)
