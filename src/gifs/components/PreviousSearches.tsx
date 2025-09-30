// Definición de las propiedades que acepta el componente
interface Props {
    searches: string[];                        // Array de términos de búsqueda anteriores
    onLabelClicked: ( term: string ) => void; // Función callback que se ejecuta al hacer clic en un término
}

/**
 * Componente PreviousSearches - Historial de búsquedas anteriores
 * Muestra una lista clickeable de búsquedas realizadas previamente
 * @param searches - Array de strings con los términos de búsqueda anteriores
 * @param onLabelClicked - Función que se ejecuta cuando el usuario hace clic en un término
 */
export const PreviousSearches = ({ searches, onLabelClicked }: Props) => {
  return (
    <div className="previous-searches">
        {/* Título de la sección */}
        <h2>Búsquedas previas</h2>
        <ul className="previous-searches-list">
            { 
                // Mapeo de los términos de búsqueda para crear elementos de lista clickeables
                searches.map( term => (
                    <li 
                        key={term} 
                        onClick={ () => onLabelClicked(term) }
                        // Cada elemento es clickeable y ejecuta la función callback con el término correspondiente
                    >
                        { term }
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
