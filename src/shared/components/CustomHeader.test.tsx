import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";
import { render, screen } from "@testing-library/react";

describe('CustomHeader', () => {

  const title: string = 'Buscador de Gifs Testing';
  const description: string = 'Descubre y comparte el gif perfecto testing';

  test('should render the title correctly', () => {

    render(<CustomHeader title={title} />);

    const textTitle = screen.getByText(title);
    expect(textTitle).toBeDefined();

  });

  test('should render the description when provided', () => {

    render(<CustomHeader title={title} description={description} />);

    const pElement = screen.getByRole('paragraph');
    expect(pElement).toBeDefined();
    expect(pElement.innerHTML).toBe(description);
  });

  test('should not render the description when not provided', () => {
    const { container } = render(<CustomHeader title={title} />);
    const pElement = container.querySelector('p');

    expect(pElement).toBeNull();

  });

  // Fernando Herrera Curso
  test('should not render the description when not provided (Fernando Herrera - Curso)', () => {
    // Solicita renderizar el componente con el title
    const { container } = render(<CustomHeader title={title} />);
    // Busca el div por el nombre de la clase
    const divElement = container.querySelector('.content-center');

    // Obtener elemento <h1>
    const h1 = divElement?.querySelector('h1');
    // Validar si se encuentra renderizado el titulo en la etiqueta <h1>
    expect(h1?.innerHTML).toBe(title);

    // Obtener elemento <p>
    const p = divElement?.querySelector('p');
    // Validar si se encuentra renderizado el titulo en la etiqueta <p>
    expect(p).toBeNull();

  });
});