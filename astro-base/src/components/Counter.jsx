import { useState } from "preact/hooks";

export const  Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
        <span>{counter}</span>
        <button class="p-4" onClick={() => setCounter(counter => counter + 1)}>+</button>
        <button class="p-4" onClick={()=> setCounter(counter => counter - 1)}>-</button>
        </>
    )
}