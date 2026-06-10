import { useState } from "react";

const functionArr = () => {
    console.log('Function called');
    return Array(100);
}

export default function FunctionUseState() {
    const [arr, setArr] = useState(functionArr);

    return (
        <button onClick={() => setArr('Hello')}>Click</button>
    )
}