import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

const handleAddMock = vi.fn();
const handleResetMock = vi.fn();
const handleSubstractMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleReset: handleResetMock,
        handleSubstract: handleSubstractMock
    })
}));

describe('MyCounterApp', () => {

    test('should render then component', () => {
        render(<MyCounterApp />);

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(`Counter: 20`);
        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    });

    test('should call handleAdd if button es clicked', () => {
        render(<MyCounterApp />);

        const button = screen.getByRole('button', { name: '+1' });

        fireEvent.click(button);

        expect(handleAddMock).toHaveBeenCalled();
        expect(handleAddMock).toHaveBeenCalledTimes(1);
        expect(handleResetMock).not.toHaveBeenCalled;
        expect(handleSubstractMock).not.toHaveBeenCalled;
    });

});