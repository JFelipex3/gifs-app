// Importaciones necesarias para la configuración de Vite
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

/**
 * Configuración de Vite para el proyecto React
 * 
 * Vite es una herramienta de construcción rápida para aplicaciones web modernas
 * que utiliza SWC (Speedy Web Compiler) para un compilado más rápido de React
 * 
 * @see https://vite.dev/config/ - Documentación oficial de configuración
 */
export default defineConfig({
  plugins: [
    // Plugin de React con SWC para compilación rápida
    // SWC es una alternativa más rápida a Babel para transformar el código JSX/TSX
    react()
  ],
})
