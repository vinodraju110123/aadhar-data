import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Retrive from './Retrive.jsx'
import Rout from './Rout.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rout />
    {/* <Header /> */}
  </StrictMode>,
)
