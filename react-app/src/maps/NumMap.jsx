export default function NumMap() {
    const num = [1, 2, 3];
    const numMapped = num.map((n) => {return n})

    return (
        <div>
            {/* {num.map(n => console.log(n))} */}
            {numMapped}
        </div>
    )
}