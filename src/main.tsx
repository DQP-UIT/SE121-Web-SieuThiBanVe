import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import FengShuiResult from './pages/fengshui/FengShuiResult'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <FengShuiResult />
  </StrictMode>,
)
