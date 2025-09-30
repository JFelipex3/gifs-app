// Importaciones necesarias
import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from "./shared/components/SearchBar";

/**
 * Componente principal de la aplicación de búsqueda de GIFs
 * Maneja el estado global y coordina la interacción entre componentes
 */
export const GifsApp = () => {

  // Estado que almacena los términos de búsqueda anteriores
  // Inicializado con un término de ejemplo
  const [previousTerms, setPreviousTerms] = useState(['one piece']);

  /**
   * Maneja el clic en un término de búsqueda anterior
   * @param term - El término seleccionado de las búsquedas anteriores
   */
  const handleTermClicked = ( term: string ) => {
    console.log({ term });
    // TODO: Implementar lógica para realizar búsqueda con el término seleccionado
  };

  /**
   * Maneja la búsqueda de un nuevo término
   * @param query - El término de búsqueda ingresado por el usuario
   */
  const handleSearch = ( query: string ) => {
    console.log({ query });
    // TODO: Implementar lógica para buscar GIFs y actualizar previousTerms
  };
    
  return (
    <>
        {/* Componente de encabezado con título y descripción */}
        <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto" />

        {/* Componente de barra de búsqueda */}
        <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />

        {/* Componente que muestra las búsquedas anteriores como enlaces clickeables */}
        <PreviousSearches searches={previousTerms} onLabelClicked={ (term) => handleTermClicked(term)} />

        {/* Componente que muestra la lista de GIFs usando datos de prueba */}
        <GifList gifs={mockGifs} />
    </>
  )
}
