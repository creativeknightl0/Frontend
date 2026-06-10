export default function LuckyNumberBtw({ no = 10 }) {
    console.log(no);
    console.log(typeof(no));
    const noBtw = Math.floor(Math.random() * no);

    return <h1>Your lucky number is: {noBtw}</h1>
}