const Calculator = () => {

    const buttonLabels = [
    'AC', '+/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

    return (
        <div className = "max-w-ws mx-auto mt-10 bg-black rounded-lg p-2 shadow-lg">
            {/* Display Screen */}
            <div className = "bg-gray-800 text-white p-4 rounded-lg text-right text-3xl mb-2">

            </div>

            {/* Button Grid */}
            <div className = "grid grid-cols-4 gap-2">
                {buttonLabels.map((label) => (
                    <button
                    key = {label}
                    className = {`
                        p-4 rounded-lg text-white text-xl
                        ${label === '0' ? 'col-span-2' : ''}
                        ${['+', '-', '*', '/', '='].includes(label) ? 'bg-orange-500' : 'bg-gray-600'} hover:bg-opacity-80
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