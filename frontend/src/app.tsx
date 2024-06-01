import React, {useState} from "react";

export const App = () => {
    const [count, setCount] = useState(0)

    const handlePlus = () => {
        setCount((prev) => prev + 1)
    }

    const handleMinus = () => {
        setCount((prev) => prev - 1)
    }

    return (
        <div>
            <button onClick={handlePlus}>plus</button>
            <button onClick={handleMinus}>minus</button>
            <span>{count}</span>
        </div>
    );
};


