import { useState } from "react";

export default function CountOnceThrice() {
    const [count, setCount] = useState(0);

    const addOnce = () => {
        setCount(count + 1);
    }

    // Older way
    const addThrice = () => {
        setCount(count + 1);
        console.log(count);
        setCount(count + 1);
        setCount(count + 1);
    }

    // Newer way
    const addThriceNew = () => {
        setCount(curr => curr + 1);
        console.log(count);
        setCount(curr => curr + 1);
        setCount(curr => curr + 1);
    }

    return (
        <div>
            <p>The count value is: {count}</p>
            <button onClick={addOnce} className='border border-black p-2 rounded-md cursor-pointer'>+1</button>
            <button onClick={addThriceNew} className='border border-black p-2 rounded-md cursor-pointer'>+3</button>
        </div>
    )
}