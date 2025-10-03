import { useState } from 'react';

export const MyCounterApp = () => {
    // Se debe llevar lógica al Custom Hook para reutilizar
    const [counter, setcounter] = useState(5);

    const handleAdd = () => {
        setcounter(prevState => prevState + 1);
    }

    const handleSubstract = () => {
        setcounter(prevState => prevState - 1);
    }

    const handleReset = () => {
        setcounter(5);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Counter: {counter}</h1>

            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleSubstract}>-1</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleAdd}>+1</button>
            </div>
        </div>
    )
}
