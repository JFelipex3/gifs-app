# 🎯 Buscador de GIFs - React App

Una aplicación web moderna para buscar y visualizar GIFs, construida con React, TypeScript y Vite.

## 📋 Descripción del Proyecto

Esta aplicación permite a los usuarios buscar GIFs de manera intuitiva y mantener un historial de búsquedas anteriores. Cuenta con una interfaz responsive y moderna que se adapta a diferentes tamaños de pantalla.

## 🚀 Características

- ✨ **Búsqueda de GIFs**: Interfaz de búsqueda intuitiva con soporte para tecla Enter
- 📱 **Diseño Responsive**: Se adapta perfectamente a móviles, tablets y escritorio
- 🔍 **Historial de Búsquedas**: Guarda y muestra las búsquedas anteriores
- ⚡ **Rendimiento Optimizado**: Construido con Vite para desarrollo rápido
- 🎨 **Interfaz Moderna**: Diseño oscuro elegante con animaciones suaves
- 📦 **TypeScript**: Tipado estático para mayor robustez del código

## 🛠️ Tecnologías Utilizadas

- **React 19.1.0**: Biblioteca principal para la interfaz de usuario
- **TypeScript**: Tipado estático para JavaScript
- **Vite**: Herramienta de construcción y desarrollo rápido
- **SWC**: Compilador ultra-rápido para React
- **ESLint**: Linting y análisis de código
- **CSS Grid**: Sistema de cuadrícula responsive

## 📁 Estructura del Proyecto

```
src/
├── GifsApp.tsx              # Componente principal de la aplicación
├── main.tsx                 # Punto de entrada de React
├── index.css                # Estilos globales y responsive
├── gifs/                    # Módulo de GIFs
│   └── components/
│       ├── GifList.tsx      # Lista/cuadrícula de GIFs
│       └── PreviousSearches.tsx # Historial de búsquedas
├── mock-data/               # Datos de prueba
│   └── gifs.mock.ts         # GIFs simulados y tipos TypeScript
└── shared/                  # Componentes compartidos
    └── components/
        ├── CustomHeader.tsx  # Encabezado personalizable
        └── SearchBar.tsx     # Barra de búsqueda reutilizable
```

## 🔧 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd gifs-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 📝 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con hot reload
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta ESLint para análisis de código
- `npm run preview`: Previsualiza la build de producción

## 🧩 Componentes Principales

### 🔍 SearchBar
Componente reutilizable para búsquedas con:
- Validación de entrada
- Soporte para tecla Enter
- Limpieza automática del campo

### 📋 GifList
Muestra los GIFs en una cuadrícula responsive:
- Grid CSS adaptativo
- Información de dimensiones
- Carga de imágenes optimizada

### 🕒 PreviousSearches
Historial de búsquedas clickeable:
- Lista horizontal con wrap
- Efectos hover interactivos
- Gestión de estado integrada

### 📑 CustomHeader
Encabezado personalizable con:
- Título y descripción opcionales
- Centrado responsive
- Tipografía consistente

## 🎨 Características de Diseño

- **Tema Oscuro**: Paleta de colores moderna y elegante
- **Tipografía**: Fuente Montserrat Alternates para mejor legibilidad
- **Responsive**: De 2 a 5 columnas según el tamaño de pantalla
- **Animaciones**: Transiciones suaves en hover y interacciones
- **Accesibilidad**: Contraste adecuado y navegación por teclado

## 🔄 Estado Actual y Próximas Funcionalidades

### ✅ Implementado
- Interfaz de usuario completa
- Componentes modulares y reutilizables
- Diseño responsive
- Datos de prueba (mock data)

### 🚧 En Desarrollo / Pendiente
- Integración con API de GIFs (Giphy API)
- Persistencia del historial de búsquedas
- Funcionalidad de favoritos
- Compartir GIFs
- Búsqueda avanzada con filtros

## 🤝 Contribuir

1. Fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ usando React + TypeScript + Vite
    ...reactDom.configs.recommended.rules,
  },
})
```
