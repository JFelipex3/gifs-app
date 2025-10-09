import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe('MyCounterApp', () => {

    test('should render the component', () => {
        render(<MyCounterApp />);

        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(`Counter: 10`);
        expect(screen.getByRole('button', {name: '+1'})).toBeDefined();
        expect(screen.getByRole('button', {name: '-1'})).toBeDefined();
        expect(screen.getByRole('button', {name: 'Reset'})).toBeDefined();
    });

    test('should increment the counter', () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', {level: 1});
        const button = screen.getByRole('button', {name: '+1'});

        fireEvent.click(button);

        expect(labelH1.innerHTML).toContain(`Counter: 11`);
    });

    test('should decrement the counter', () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', {level: 1});
        const button = screen.getByRole('button', {name: '-1'});

        fireEvent.click(button);

        expect(labelH1.innerHTML).toContain(`Counter: 9`);
    });

    test('should reset the counter', () => {
        render(<MyCounterApp />);

        const labelH1 = screen.getByRole('heading', {level: 1});
        const buttonIncrement = screen.getByRole('button', {name: '+1'});
        const buttonReset = screen.getByRole('button', {name: 'Reset'});

        fireEvent.click(buttonIncrement);
        fireEvent.click(buttonReset);

        expect(labelH1.innerHTML).toContain(`Counter: 10`);
    });

});
