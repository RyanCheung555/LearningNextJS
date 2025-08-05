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
    const [previousValue, setPreviousValue] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [waitingForNewOperand, setWaitingForNewOperand] = useState(false);

    const handleButtonClick = (value: string) => {
        if(value === 'AC'){
            setDisplayValue('0');
            setPreviousValue(null);
            setOperator(null);
            setWaitingForNewOperand(false);
            return;
        }
        if(['+', '-', '*', '/'].includes(value)){
            setPreviousValue(Number(displayValue));
            setOperator(value);
            setWaitingForNewOperand(true);
            return;
        }
        if(value === '='){
            if (operator && previousValue !== null) {
                const currentValue = Number(displayValue);
                let result = 0;
                
                switch (operator) {
                    case '+':
                        result = previousValue + currentValue;
                        break;
                    case '-':
                        result = previousValue - currentValue;
                        break;
                    case '*':
                        result = previousValue * currentValue;
                        break;
                    case '/':
                        result = previousValue / currentValue;
                        break;
                }                            
                setDisplayValue(String(result));
                setPreviousValue(null);
                setOperator(null);
                setWaitingForNewOperand(true);
                return;
            }
        }
        if(['+', '-', '*', '/'].includes(value)){
            setPreviousValue(Number(displayValue));
            setOperator(value);
            setWaitingForNewOperand(true);
            return;
        }
        if (!isNaN(Number(value)) || value === '.'){
            if (waitingForNewOperand) {
                setDisplayValue(value);
                setWaitingForNewOperand(false);
            }
            else {
                setDisplayValue(displayValue === '0' && value !== '.' ? value : displayValue + value);
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