function d6() {
    return Math.floor(Math.random() * 6) + 1;
}

function getRolls(n) {
    return Array.from({length: n}, () => d6());
}

function sumUp(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

export { d6, getRolls, sumUp };