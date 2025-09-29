import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from "./shared/components/SearchBar";


export const GifsApp = () => {
  return (
    <>
        {/* Header */}
        <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto" />

        {/* Search */}
        <SearchBar placeholder="Buscar gifs" />

        {/* Busquedas previas */}
        <PreviousSearches searches={['One Piece', 'Dragon Ball', 'Naruto']}/>

        {/* Gifs */}
        <GifList gifs={mockGifs} />
    </>
  )
}
