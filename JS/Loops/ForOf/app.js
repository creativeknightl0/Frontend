// let subreddits=['soccer', 'popheads', 'cringe', 'books'];

// for(let i=0;i<subreddits.length;i++){
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for(let sub of subreddits){
//     console.log(`Vist reddit.com/r/${sub}`)
// }

// const seatingChart=[
//     ['Erica', 'Kenny', 'Kevin'],
//     ['Cassey', 'Hooper', 'Jack'],
//     ['Coleman', 'Mack', 'Masey']
// ];

// for(let i=0;i<seatingChart.length;i++){
//     const row=seatingChart[i];
//     for(let j=0;j<row.length;j++){
//         console.log(row[j]);
//     }
// }

// for(let row of seatingChart){

//     for(let student of row){
//         console.log(student);
//     }
// }

// for(let char of "hello world"){
//     console.log(char);
// }

//  ODIN Project - Loops and Arrays

// For looping list 
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for(const cat of cats) {
//     console.log(cat);
// }

// function upperCatsCase(cats) {
//     cats.toUpperCase();
// }

// Map - apply to each item and print all items in new container
const upperCats = cats.map(cat => cat.toUpperCase());

// Filter - whatever item passes the condition chosen and printed in a new container
const filterCats = cats.filter(cat => cat.startsWith('L'))

console.log(upperCats);
console.log(filterCats);