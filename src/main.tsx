import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Info from './pages/info/Info.jsx';
import FendShui from './pages/fengshui/FendShui.jsx';
import AppRoutes from './routes/routes.jsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <FendShui />
  </StrictMode>,
)
