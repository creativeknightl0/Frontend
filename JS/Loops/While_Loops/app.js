// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// const SECRET = "BabyHippo";

// let guess=prompt("enter the secret code... ");
// while(guess!==SECRET){
//     guess=prompt("enter the secret code... ");
// }
// console.log("Congrats! You correct");

// Break
// let input=prompt("Hey, say something!");
// while(true){
//     input=prompt(input);
//     if(input.toLowerCase()=="stop copying me"){
//         break;
//     }
// }
// console.log("OK, YOU WIN!");

// Guessing game

let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum){
    maximum=parseInt(prompt("Enter the valid number!"));
}

const targetNum=Math.floor(Math.random()*maximum)+1;
console.log(targetNum);

let guess=parseInt(prompt("Enter the first guess!"));
let attempts=1;

while(parseInt(guess)!==targetNum){
    if(guess==='q') break;
    attempts++;
    if(guess>targetNum){
        guess=prompt("Too high! Enter a new guess:");
    }
    else{
        guess=prompt("Too low! Enter a new guess:");
    }
}
if(guess==='q'){
    console.log("Ok, You quit");
}else{
    console.log("Congrats, you win!")
    console.log(`You got it! It took you ${attempts} guesses`);
}
