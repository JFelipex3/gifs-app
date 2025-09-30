// Importación del hook useState de React
import { useState } from "react";

// Definición de las propiedades que acepta el componente
interface Props {
    placeholder?: string; // Texto de placeholder opcional para el input
    onQuery: ( query: string ) => void; // Función callback que se ejecuta al realizar una búsqueda
}

/**
 * Componente SearchBar - Barra de búsqueda reutilizable
 * Permite al usuario ingresar texto y realizar búsquedas
 * @param placeholder - Texto que se muestra cuando el input está vacío
 * @param onQuery - Función que se ejecuta cuando se realiza una búsqueda
 */
export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {

  // Estado local que almacena el valor actual del input de búsqueda
  const [query, setQuery] = useState('');

  /**
   * Función que maneja la acción de búsqueda
   * Ejecuta el callback onQuery con el término actual y limpia el input
   */
  const handleSearch = () => {
    // Solo ejecutar la búsqueda si hay texto ingresado
    if (query.trim()) {
      onQuery( query.trim() );
      setQuery(''); // Limpiar el input después de la búsqueda
    }
  };

  /**
   * Maneja el evento de tecla presionada en el input
   * Permite realizar búsqueda presionando Enter
   * @param event - Evento de teclado de React
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
        {/* Input de texto para ingresar el término de búsqueda */}
        <input 
          type="text" 
          placeholder={placeholder} 
          value={ query } 
          onChange={ (event) => setQuery(event.target.value)}
          onKeyDown={ handleKeyDown }
        />
        {/* Botón para ejecutar la búsqueda */}
        <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
