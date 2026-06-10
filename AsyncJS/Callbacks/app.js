// console.log("Sending request to server!");
// setTimeout(() => {
//     console.log("Here is your data from the server...");
// }, 3000);
// console.log("I am at the end of the file!");

function yt(str) {
    console.log(`${str} is asshole`);
}

yt('Hello');
console.log(yt);
console.dir(yt);

const obj = {slang: 'Douche Bag'};
console.log(obj);
yt(obj);
// callback function
function useCallback(callback) {
    callback('Hello');
}

useCallback(yt);
useCallback(y => console.log(`${y} is whore`));