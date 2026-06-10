export default function DoubleDice() {
    const num1 = Math.floor(Math.random()*6) + 1;
    const num2 = Math.floor(Math.random()*6) + 1;

    // 1st way - using if and return
    // if(num1 === num2) {
    //     return (
    //         <>
    //             <h1>You win!</h1>
    //             <p>num1 is {num1}</p>
    //             <p>num2 is {num2}</p>
    //         </>
    //     )
    // }
    // else {
    //     return (
    //         <>
    //             <h1>You lose!</h1>
    //             <p>num1 is {num1}</p>
    //             <p>num2 is {num2}</p>
    //         </>
    //     )
    // }

    // 2nd way - using ternary

    // const result = num1 === num2 ? 'You win!': 'You lose!';
    
    // return (
    //     <>
    //         <h1>{result}</h1>
    //         <p>num1 is {num1}</p>
    //         <p>num2 is {num2}</p>
    //     </>
    // )

    // 3rd way - using inline ternary
    // return (
    //     <>
    //         <h1>{num1 === num2 ? 'You win!' : 'You lose!'}</h1>
    //         <p>num1 is {num1}</p>
    //         <p>num2 is {num2}</p>
    //     </>
    // )

    // 4th way - null
    // return (
    //     <>
    //         <h1>{num1 === num2 ? 'You win!' : null}</h1>
    //         <p>num1 is {num1}</p>
    //         <p>num2 is {num2}</p>
    //     </>
    // )

    // 5th way - using && operator
    return (
        <>
            {num1 === num2 && <h1>You win!</h1>}
            <p>num1 is {num1}</p>
            <p>num2 is {num2}</p>
        </>
    )
}