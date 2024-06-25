import { useState } from "react";
import "./App.css";

function App() {
    const [stateArray, updateStateArray] = useState([]);

    // const arr = [];
    // for (let i = 0; i < 5; i++) {
    //     const button = (
    //         <button
    //             key={i}
    //             className="py-2 px-4 bg-blue-500 text-white rounded m-2"
    //         >
    //             Hello {i}!
    //         </button>
    //     );
    //     arr.push(button);
    // }

    return (
        <div className="flex flex-col space-y-10 items-center justify-center min-h-screen">
            <div className="bg-blue-300 w-full py-20 relative">
                <AddCounterButton
                    stateArray={stateArray}
                    updateStateArray={updateStateArray}
                ></AddCounterButton>
            </div>
            {stateArray.map((val, index) => (
                <CounterButton key={index}></CounterButton>
            ))}
        </div>
    );
}

const AddCounterButton = (props) => {
    const stateArray = props.stateArray;
    const updateStateArray = props.updateStateArray;
    const handleClick = () => {
        console.log(stateArray);
        updateStateArray([...stateArray, {}]);
    };
    return (
        <button
            className="text-xl rounded-xl bg-slate-800 text-white px-10 py-6 shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onClick={handleClick}
        >
            Add a Counter Button!
        </button>
    );
};
const CounterButton = () => {
    const [count, setCount] = useState(0);

    const handleInc = () => {
        setCount(count + 1);
    };

    const handleDec = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };
    return (
        <div className="flex flex-col items-center space-y-4 rounded-xl shadow-lg bg-black text-white font-sans font-semibold py-5 px-10">
            <div className=" text-lg">Count is {count}</div>
            <div className="flex flex-row space-x-4">
                <button
                    className="py-4 px-6 w-24 bg-green-500 rounded-lg"
                    onClick={handleInc}
                >
                    Up
                </button>
                <button
                    className="py-4 px-6 w-24 bg-red-500 rounded-lg"
                    onClick={handleDec}
                >
                    Down
                </button>
                <button
                    className="py-4 px-6 w-24 bg-blue-500 rounded-lg"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default App;
