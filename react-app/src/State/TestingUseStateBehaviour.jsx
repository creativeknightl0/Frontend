import { useState } from 'react';

export default function TestingUseStateBehaviour() {
    const [num, setNum] = useState(2);
    console.log('Num value after useState: ' + num);
    const [isOdd, setIsOdd] = useState(false);
    console.log('isOdd value after useState: ' + isOdd);

    const changeNumFunction = () => {
        setNum(num+1);
        console.log('Num value here in function: ' + num);
        setIsOdd(!isOdd);
        console.log('isOdd value here in function: ' + isOdd);
    }

    return (
        <div>
            <p>The num value is: {num} - {isOdd ? 'Odd number' : 'Even number'}</p>
            <button className='border border-black p-2 rounded-md cursor-pointer' onClick={changeNumFunction}>Increment</button>
        </div>
    )
}