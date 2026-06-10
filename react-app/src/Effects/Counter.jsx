import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [inp, setInp] = useState('');

    // 1. for first and every render
    // useEffect(function myEffect() {
    //     console.log('Rendered');
    // })

    // 2. for first and every time count value changes
    // useEffect(function myEffect() {
    //     console.log('Rendered');
    // }, [count]);

    // 3. for only the first render and not afterwards
    useEffect(function myEffect() {
        console.log('Rendered');
    }, []);

    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const handleInputChange = (e) => {
        setInp(e.target.value);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increaseCount}>+1</button>
            <p>{inp}</p>
            <input value={inp} onChange={handleInputChange} type="text" />
        </div>
    )
}