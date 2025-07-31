import React, { useState } from 'react';

const Calculator = () => {

    const buttonLabels = [
    'AC', '+/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

    const [displayValue, setDisplayValue] = useState('0');

    const handleButtonClick = (value: string) => {
        if (!isNaN(Number(value)) || value === '.'){
            if (displayValue === '0' && value !== '.'){
                setDisplayValue(value);
            }
            else {
                setDisplayValue(displayValue + value);
            }
        }
    };

    return (
        <div className = "max-w-ws mx-auto mt-10 bg-black rounded-lg p-2 shadow-lg">
            {/* Display Screen */}
            <div className = "bg-gray-800 text-white p-4 rounded-lg text-right text-3xl mb-2">
                {displayValue}
            </div>

            {/* Button Grid */}
            <div className = "grid grid-cols-4 gap-2">
                {buttonLabels.map((label) => (
                    <button
                    key = {label}
                    onClick={() => handleButtonClick(label)}
                    className = {`
                        p-4 rounded-lg text-white text-xl
                        ${label === '0' ? 'col-span-2' : ''}
                        ${['+', '-', '*', '/', '='].includes(label) ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-600 hover:bg-gray-700'} 
                        `}
                    >
                        {label}
                    </button>
                ))}

            </div>

        </div>
    );
};

export default Calculator;