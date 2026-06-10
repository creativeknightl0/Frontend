function ArrayFrom() {
    console.log(Array.from([1, 2, 3], x => x * x));
    console.log(Array.from("tonight"));
    console.log(Array.from({length: 2}, (val, indx) => indx));
}

export default ArrayFrom;