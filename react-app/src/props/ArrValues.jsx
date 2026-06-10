export default function ArrValues({ arr }) {
    console.log(arr);
    const randIndx = Math.floor(Math.random() * arr.length) + 1;
    return <h3>{arr[randIndx]}</h3>;
}