export default function DoubleDiceColored() {
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    const winner = num1 === num2;
    const styles = winner ? 'green' : 'red';

    return (
        <div style={{color: styles}}>
            {winner && <h1>You win!</h1>}
            <p>num1 is {num1}</p>
            <p>num2 is {num2}</p>
        </div>
    )
}