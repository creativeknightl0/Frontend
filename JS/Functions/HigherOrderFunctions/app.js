// function callTwice(func){
//     func();
//     func();
// } 

// function callTenTimes(f){
//     for(let i=0;i<10;i++){
//         f();
//     }
// }

// function rollDie(){
//     const roll=Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }

// callTwice(rollDie);

// function makeMysteryFunc(){
//     const rand=Math.random();
//     if(rand>0.5){

//         return function(){
//             console.log("Congrats, I am a good function");
//             console.log("You win a million dollars");
//         }
//     }
//     else{
//         return function(){
//             alert("You have been infected by a computer virus!");
//             alert("Stop trying to close the window");
//             alert("Stop trying to close the window");
//             alert("Stop trying to close the window");
//             alert("Stop trying to close the window");
//         }
//     }
// }

function makeBetweenFunc(min, max){
    return function(num){
        return num>=min && num<=max;
    }
}


// function isBetween(num){
//     return num>=50 && num<=100;
// }

// function isBetween2(num){
//     return num>=1 && num<=10;
// }