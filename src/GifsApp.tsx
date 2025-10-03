// Importaciones necesarias
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {

  const {gifs, previousTerms, handleTermClicked, handleSearch} = useGifs();

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
