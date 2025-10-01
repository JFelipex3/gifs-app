// Importaciones necesarias
import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

/**
 * Componente principal de la aplicación de búsqueda de GIFs
 * Maneja el estado global y coordina la interacción entre componentes
 */
export const GifsApp = () => {

  // Estado que almacena los términos de búsqueda anteriores
  // Inicializado con un término de ejemplo
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const [gifs, setGifs] = useState<Gif[]>([]);

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
  const handleSearch = async ( query: string = '' ) => {
    
    query = query.trim().toLowerCase();

    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].slice(0, 7));

    const newGifs = await getGifsByQuery(query);
    setGifs(newGifs);
    
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
        <GifList gifs={gifs} />
    </>
  )
}
