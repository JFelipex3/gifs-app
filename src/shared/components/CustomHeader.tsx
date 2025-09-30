// Definición de las propiedades que acepta el componente
interface Props {
    title: string;        // Título principal (obligatorio)
    description?: string; // Descripción opcional
}

/**
 * Componente CustomHeader - Encabezado personalizable
 * Muestra un título y opcionalmente una descripción
 * @param title - El título principal a mostrar
 * @param description - Descripción opcional que aparece debajo del título
 */
export const CustomHeader = ({ title, description }: Props) => {
  return (
    <div className="content-center">
        {/* Título principal del encabezado */}
        <h1>{ title }</h1>
        {/* Descripción condicional - solo se muestra si se proporciona */}
        { description && <p>{ description }</p> }
    </div>
  )
}
