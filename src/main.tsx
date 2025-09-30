// Importaciones necesarias de React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GifsApp } from './GifsApp'

// Punto de entrada de la aplicación React
// Se crea el root del DOM y se renderiza la aplicación principal dentro de StrictMode
// StrictMode ayuda a identificar problemas potenciales en la aplicación durante el desarrollo
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifsApp />
  </StrictMode>,
)
