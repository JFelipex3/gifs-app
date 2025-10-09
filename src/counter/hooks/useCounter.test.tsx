import { describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';
import { act, renderHook } from '@testing-library/react';

describe('useCounter', () => {

    test('should initialize with default value of 10', () => {
        const { result } = renderHook( () => useCounter() );
        expect(result.current.counter).toBe(10);
    });

    test('should initialize with value 20', () => {
        const initialValue = 20;
        const { result } = renderHook( () => useCounter(initialValue));

        expect(result.current.counter).toBe(initialValue);
    });

    test('should increment counter when handleAdd is called', () => {
        const initialValue = 0;
        const { result } = renderHook( () => useCounter(initialValue) );
        
        act( () => {
            result.current.handleAdd();
        }) 

        expect(result.current.counter).toBe(initialValue + 1);
    });
    
    test('should decrement counter when handleSubstract is called', () => {
        const initialValue = 5;

        const { result } = renderHook( () => useCounter(initialValue) );

        act( () => {
            result.current.handleSubstract();
        });

        expect(result.current.counter).toBe(initialValue - 1);

    });

    test('should reset to initialValue the counter when handleReset is called', () => {
        const initialValue = 5;

        const { result } = renderHook( () => useCounter(initialValue) );

        act( () => {
            result.current.handleAdd();
        });

        act( () => {
            result.current.handleReset();
        });

        expect(result.current.counter).toBe(initialValue);

    });
});