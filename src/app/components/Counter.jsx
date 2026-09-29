'use client';

import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    console.log('Counter component rendered');

    const handleIncrese = () => {
        console.log('Increase button clicked');
        setCount(count + 1)
    }

    return (
        <div>
            
            <h2 className='text-4xl font-bold mb-4'>Counter: {count} </h2>
            <button onClick={handleIncrese}
            className='bg-blue-600 hover:bg-indigo-950 
            text-white font-bold py-2
            px-4 rounded-2xl'>Increase</button>
        </div>
    );
};

export default Counter;