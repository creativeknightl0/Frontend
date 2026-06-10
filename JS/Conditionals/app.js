// console.log("BEFORE");
// if(1+2===2){
//     console.log("WINS!");
// }
// console.log("AFTER");

// let random=Math.random();
// if(random<0.5){
//     console.log("OUR NO IS LESS THAN 0.5");
// }

// else{
//     console.log("OUR NO IS MORE THAN (OR EQUAL TO) 0.5");
// }

// console.log(random);

// const dayOfWeek=prompt("Enter the day: ").toLowerCase();
// if(dayOfWeek==='monday'){
//     console.log("UGGH, MONDAYS ARE MEDIOCRE!");
// }

// else if(dayOfWeek==='saturday'){
//     console.log("YAY I LIKE SATURDAYS!");
// }

// else if(dayOfWeek=='friday'){
//     console.log("I WAIT EAGERLY FOR FRIDAYS!");
// }

// else{
//     console.log("MEH");
// }

// 0-5 - FREE
// 5-10 - CHILD 10$
// 10-65 - ADULTS 20$
// 65+ - SENIOR 10$

// const age=85;

// if(age<5){
//     console.log("You are a baby. You get in for free!");
// }
// else if(age<10){
//     console.log("You are a child. You pay $10");
// }
// else if(age<65){
//     console.log("You are an adult. You pay $20");
// }
// else{
//     console.log("You are a senior. You pay $10!");
// }

const password=prompt("Enter your password: ");

// must contain 6+ characters
if(password.length >= 6){
    // cannot contain spaces
    if(password.indexOf(' ')===-1){
        console.log("Valid Password!");
    }
    else{
        console.log("Password cannot contain spaces.");
    }
}
else{
    console.log("Password too short. Must be 6+ characters.");
}
