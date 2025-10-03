// Importación del tipo Gif desde la interface
import type { Gif } from "../interfaces/gif.interface";


// Definición de las propiedades que acepta el componente
interface Props {
    gifs: Gif[]; // Array de objetos Gif para mostrar en la lista
}

/**
 * Componente GifList - Lista de GIFs
 * Renderiza una colección de GIFs en formato de cuadrícula
 * @param gifs - Array de objetos Gif que contienen la información de cada GIF
 */
export const GifList = ({ gifs }: Props) => {
    return (
        <div className="gifs-container">
            {
                // Mapeo del array de GIFs para crear una tarjeta por cada elemento
                gifs.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        {/* Imagen del GIF */}
                        <img src={gif.url} alt={gif.title} />
                        {/* Título del GIF */}
                        <h3>{gif.title}</h3>
                        {/* Información adicional: dimensiones y tamaño */}
                        <p>
                            {gif.width} x {gif.height} (1.5mb)
                        </p>
                    </div>
                ))
            }
        </div>
    )
}
