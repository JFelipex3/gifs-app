// Importaciones necesarias
import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
    // TODO: Implementar lógica para realizar búsqueda con el término seleccionado
  };

  const handleSearch = async (query: string = '') => {

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
      <PreviousSearches searches={previousTerms} onLabelClicked={(term) => handleTermClicked(term)} />

      {/* Componente que muestra la lista de GIFs usando datos de prueba */}
      <GifList gifs={gifs} />
    </>
  )
}
