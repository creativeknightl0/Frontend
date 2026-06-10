import { useState } from "react";

export default function Counter() {
    // let count = 0;
    // function handleCountIncrement() {
    //     count += 1;
    //     console.log(count);
    // }

    // const arr = useState(5);
    // console.log(arr);

    const [count, setCount] = useState(0);

    const handleCountIncrement = () => {
        setCount(count+1);
    }
    
    return (
        <>
            <p>The count is: {count}</p>
            <button onClick={handleCountIncrement}>Count</button>
        </>
    )
}