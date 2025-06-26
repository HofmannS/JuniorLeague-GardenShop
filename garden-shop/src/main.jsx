import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './App.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Layout>
      <App />
    </Layout>
    </BrowserRouter>
  </StrictMode>
)
