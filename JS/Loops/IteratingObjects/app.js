const testScores = {
    kim: 89,
    shawn: 91,
    elvira: 97,
    marlon: 72,
    nadia: 83,
    damon: 67,
    vonnie: 60,
    keenan: 80,
    mac: 77
}

// for(let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`);
// }

let total=0;
let scores=Object.values(testScores);
for(let score of Object.values(testScores)){
    total+=score;
}

console.log(total/scores.length);