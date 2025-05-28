import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import 'react-toastify/dist/ReactToastify.css';


import { LanguageProvider } from './context/LanguageContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>

    <ThemeProvider>
      <App />
    </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
